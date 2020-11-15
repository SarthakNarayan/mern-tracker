const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// only one field in this schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
