const Site = require("../models/site");
const City = require("../models/city");
const { v4: uuidv4 } = require("uuid");
// uuid, helps generate our unique ids
const S3 = require("aws-sdk/clients/s3.js");
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();
//specifies bucketname based on env
const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  delete: deleteSite,
};

async function create(req, res) {
  // console.log(req.body, "<-- req.body", req.file, "<--req.file", req.params.id);
  //if there is no file then you need to send back an error
  if (!req.file)
    return res.status(400).json({ error: "Please submit a site photo" });
  //need to define the file path for your photo and the object containing your aws payload
  const filePath = `travelapp/sites/${uuidv4}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    if (err) {
      console.log("===============================");
      console.log(
        err,
        " <- error from aws, Probably telling you your keys arent correct"
      );
      console.log("===============================");
      res.status(400).json({ error: "error from aws, check your terminal" });
    }
    req.body.photoUrl = data.Location;
    const site = new Site(req.body);
    try {
      await site.save();
      const city = await City.findById(req.params.id);
      city.sites.push(site._id);
      await city.save();
      res.status(201).json({ site: "site was made and added to city" });
    } catch (err) {
      console.log(err, "<-- error in create site function in sitesCtrl");
      res.status(400).json(err);
    }
  });
}

async function deleteSite(req, res) {
  try {
    //find the site document and delete it from db
    const site = await Site.findByIdAndDelete(req.params.id);
    //find the city with the site id
    const city = await City.findOne({ sites: req.params.id });
    //delete the object id from the sites array within city doc
    city.sites.remove(req.params.id);
    //save city doc
    await city.save();
    //respond to client
    res.status(200).json({
      data: "site was deleted and its id removed from the city document",
    });
  } catch (err) {
    console.log(err, "<-- error in delete site function in sitesCtrl");
    res.status(400).json(err);
  }
}
