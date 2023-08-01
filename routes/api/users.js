const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const multer = require("multer");
const upload = multer();

//all routes are prepended with "/api/users"
/*---------- Public Routes ----------*/
router.post("/signup", upload.single("photo"), usersCtrl.signup);
router.post("/login", usersCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;

/*---------- Protected Routes ----------*/
