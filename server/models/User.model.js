const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: String,
    password: String 
  }
);

const User = model("User", userSchema);

module.exports = User;
