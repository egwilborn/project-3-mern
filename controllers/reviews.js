const Site = require("../models/site");

module.exports = {
  create,
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
