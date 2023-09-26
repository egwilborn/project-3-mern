const Site = require("../models/site");

module.exports = {
  create,
  delete: deleteReview,
};

async function create(req, res) {
  try {
    //add username to req.body
    req.body.username = req.user.username;
    //add userId to the body
    req.body.userId = req.user._id;
    //add photo url to the body
    req.body.userPhotoUrl = req.user.photoUrl;
    console.log(req.body);
    //find the site we are adding a review to
    const site = await Site.findById(req.params.id);
    site.reviews.push(req.body);
    await site.save();
    res.status(201).json({ review: "review was made and added to city" });
  } catch (err) {
    console.log(err, "<-- err with creating review in reviewsCtrl");
    res.status(400).json({ error: "error creating review, check terminal" });
  }
}

async function deleteReview(req, res) {
  try {
    //find the correct site document
    const site = await Site.findOne({
      "reviews._id": req.params.id,
      "reviews.userId": req.user._id, // makes sure logged in user can only delete the reviews they wrote
    });
    //remove the reviews document from the site
    site.reviews.remove(req.params.id);
    //save the site document
    site.save();
    //respond to  browser
    res.status(204).json({ review: "review was deleted from site document" });
  } catch (err) {
    console.log(err, "<-- err with deleting review in reviewsCtrl");
    res.status(400).json({ error: "error deleting review, check terminal" });
  }
}
