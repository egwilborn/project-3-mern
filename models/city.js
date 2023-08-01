const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//one city has has many sites, a site belongs to a city (1:M)
//one city has many usersFollowing, one user follows many cities(M:M)
const citySchema = new Schema(
  {
    name: String,
    country: String,
    description: String,
    photoUrl: String,
    sites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Site" }],
    usersFollowing: [{ type: mongoose.Schema.Types.ObjectId, ref: "Site" }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("City", citySchema);
