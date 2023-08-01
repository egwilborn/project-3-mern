const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//one site has many reviews, a review belongs to a site (1:M)
//one user has many reviews, a review belongs to a user (1:M)
const reviewSchema = new Schema(
  {
    content: String,
    rating: Number,
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Review" },
  },
  {
    timestamps: true,
  }
);

const siteSchema = new Schema(
  {
    name: String,
    description: String,
    photoUrl: String,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Site", siteSchema);
