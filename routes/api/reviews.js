const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/reviews");

//all routes are prepended with "/api/
/*---------- Public Routes ----------*/
router.post("/sites/:id/reviews", reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.delete);
/*---------- Protected Routes ----------*/

module.exports = router;
