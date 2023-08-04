const express = require("express");
const router = express.Router();
const sitesCtrl = require("../../controllers/sites");
const multer = require("multer");
const upload = multer();
//all routes are prepended with "/api"
/*---------- Public Routes ----------*/
router.post("/cities/:id/site", upload.single("photo"), sitesCtrl.create);
router.delete("/sites/:id", sitesCtrl.delete);
/*---------- Protected Routes ----------*/

module.exports = router;
