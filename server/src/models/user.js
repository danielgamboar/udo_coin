var mongoose = require("mongoose")
var Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
SALT_WORK_FACTOR = 10

var UserSchema = new Schema({
  name: String,
  lastname: String,
  email: {type: String, unique: true},
  cedula: {type: String, unique: true},
  Address: String,
  password: String
  
})

  UserSchema.index({
    email: 1,
    cedula : 1
  }, {
    unique: true
  })

  UserSchema.pre('save', (next)=>{
    var user = this       
    if (!user.isModified('password')) return next()

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) =>{
        if (err) return next(err)

        // hash the password using our new salt
        bcrypt.hash(user.password, salt,null ,(err, hash) =>{
            if (err) return next(err)

            // override the cleartext password with the hashed one
            user.password = hash
            next()
        })
    })
    })
  
  UserSchema.methods.comparePassword = (candidatePassword, cb) =>{
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) =>{
        if (err) return cb(err)
        cb(null, isMatch)
    })
  }

var User = mongoose.model("User", UserSchema);



module.exports = User;
