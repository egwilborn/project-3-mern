const City = require("../models/city");
const Site = require("../models/site");

const { v4: uuidv4 } = require("uuid");
// uuid, helps generate our unique ids
const S3 = require("aws-sdk/clients/s3.js");
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();
//specifies bucketname based on env
const BUCKET_NAME = process.env.BUCKET_NAME;
module.exports = {
  create,
  index,
  follow,
  unfollow,
  show,
  delete: deleteCity,
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
      res.status(201).json({ data: city }); //sends back a response containing the new city information
    } catch (err) {
      console.log(
        err,
        "<-- error creating document in mongo - citiesCtrl.create"
      );
      res.status(400).json(err);
    }
  });
}

async function index(req, res) {
  try {
    //finds all cities in the model and stores in the the variable "cities"
    const cities = await City.find({}).sort({ name: "asc" });
    res.status(201).json({ cities }); //send "cities" back to be rendered for client
  } catch (err) {
    console.log(err, "<--- error with indexing cities in cities controller");
    res.status(400).json(err);
  }
}

async function follow(req, res) {
  try {
    const followedCity = await City.findById(req.params.id);
    followedCity.usersFollowing.push(req.user._id);
    await followedCity.save();
    res.status(201).json({ data: "user is following city" });
  } catch (err) {
    console.log(err, "<--- error with following city in cities controller");
    res.status(400).json(err);
  }
}
async function unfollow(req, res) {
  try {
    const followedCity = await City.findById(req.params.id);
    followedCity.usersFollowing.remove(req.user._id);
    await followedCity.save();
    res.status(201).json({ data: "user is no longer following city" });
  } catch (err) {
    console.log(err, "<--- error with following city in cities controller");
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    //when the city is retrieved we need to populate the sites array of ids so that
    //we can access the sites without need another api call
    const city = await City.findById(req.params.id).populate("sites").exec();
    // console.log(city, "checking for populating sites in citiesCtrl");
    res.status(201).json({ city });
  } catch (err) {
    console.log(err, "<-- error from cities controller, show function");
    res.status(400).json(err);
  }
}

async function deleteCity(req, res) {
  try {
    //need to first delete the sites that are associated with the city
    const city = await City.findById(req.params.id);
    city.sites.forEach(async function (site) {
      await Site.findByIdAndDelete(site);
    });
    //then delete the city
    await City.findByIdAndDelete(req.params.id);
    res.status(201).json({ response: "city was deleted successfully" });
  } catch (err) {
    console.log(err, "<-- error from cities controller, deleteCity function");
    res.status(400).json(err);
  }
}
