var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  apellido: String,
  cedula: Number,
  Address: String,
  email: String,
  password: String
});

var User = mongoose.model("Post", UserSchema);
module.exports = User;

