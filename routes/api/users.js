const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

//all routes are prepended with "/api/users"
/*---------- Public Routes ----------*/
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;

/*---------- Protected Routes ----------*/
