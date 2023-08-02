const express = require("express");
const router = express.Router();
const citiesCtrl = require("../../controllers/cities");
const multer = require("multer");
const upload = multer();

//all routes are prepended with "/api/cities"
/*---------- Public Routes ----------*/
router.post("/", upload.single("photo"), citiesCtrl.create);
router.get("/", citiesCtrl.index);
router.post("/:id/follow", citiesCtrl.follow);
router.delete("/:id/unfollow", citiesCtrl.unfollow);
/*---------- Protected Routes ----------*/

module.exports = router;
