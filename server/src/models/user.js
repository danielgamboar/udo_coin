var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  lastname: String,
  email: {type: String, unique: true},
  cedula: {type: String, unique: true},
  Address: String,
  password: String
  
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
