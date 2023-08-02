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
};

//for creating a new city post
async function create(req, res) {
  //check if there is a file
  if (!req.file)
    return res.status(400).json({ error: "Please submit a city photos" });
  const filePath = `travelapp/cities/${uuidv4()}-${req.file.originalname}`;
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
    req.body.photoUrl = data.Location; // aws responds with file data, so we set the location to be
    //the url in the user model
    const city = new City(req.body);
    try {
      await city.save();
      // console.log(city, "<-- new document");
      res.status(201).json({ data: city }); //sends back a response containing the new post information
    } catch (err) {
      console.log(
        err,
        "<-- error creating document in mongo - citiesCtrl.create"
      );
      res.status(400).json(err);
    }
  });
}
