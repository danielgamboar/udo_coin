var mongoose = require("mongoose")
var Schema = mongoose.Schema

var contactSchema = new Schema({
    cedulaUser: String,
    cedulaContact: String,
    alias: String
  })
   
  var contact = mongoose.model("ContactUser", contactSchema);
  module.exports = contact;