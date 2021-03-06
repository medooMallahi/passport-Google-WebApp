const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    default: 0,
  },
}); // end of Schema

//model is a function I call and a model basically is important for mongoose behind the scenes to connect
//a schema, a blueprint with a name basically,
mongoose.model("users", userSchema);
