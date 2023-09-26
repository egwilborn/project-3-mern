const User = require("../models/user");
const City = require("../models/city");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const { v4: uuidv4 } = require("uuid");
// uuid, helps generate our unique ids
const S3 = require("aws-sdk/clients/s3.js");
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();
//specifies bucketname based on env
const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  signup,
  login,
  index,
};

async function signup(req, res) {
  // double check that multer is working
  // console.log(req.body, req.file, "<-- req.body and req.file");
  //pull file and put in s3 bucket

  //first check that there is a file
  if (!req.file)
    return res.status(400).json({ error: "Please Submit a Profile Photo" });
  // then specify a file path within your bucket
  const filePath = `travelapp/${uuidv4()}-${req.file.originalname}`;
  //now put together the object that will be sent over
  const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };
  //s3 upload receives params and sends it over. then aws send back a response with an err and with data about
  //our file
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
    const user = new User(req.body); // make new user in model
    try {
      await user.save(); //save new user
      const token = createJWT(user); //make a token with that user
      res.json({ token }); //send token to browser
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  });
}

async function login(req, res) {
  try {
    //find the user with matching email from login request
    const user = await User.findOne({ email: req.body.email });
    // if the user doesn't exist with the login creds, throw error
    if (!user) return res.status(401).json({ err: "bad credentials" });
    // if the user exists, check the password against the one in the db
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        //if it works, make a token with user info and send to server
        const token = createJWT(user);
        res.json({ token });
      } else {
        //if password doesn't match, throw error
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function index(req, res) {
  try {
    //find all the cities that have req.user._id in their usersFollowing array
    const userCities = await City.find({ usersFollowing: req.user._id });
    // console.log(userCities, "<-- userCities from user controller");
    res.status(200).json({ data: userCities });
  } catch (err) {
    console.log(
      err,
      "<--err in retrieving user cities, see index fn user ctrl"
    );
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}
