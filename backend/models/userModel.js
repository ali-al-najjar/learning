const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: "First Name is required"},
  last_name: {
    type: String,
    required: "Last Name is required"},
  email: {
    type: String,
    required: "Email is required",
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Please fill a valid email address:"],
    minlength: 8},
  password: {
    type: String,
    required: "Password is required"},
  role: {
    type: String,
    enum: ["user","admin"],
    default: "user",
  }
})

userSchema.pre("save", async function(next){
  if(this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password);
  next();
})

userSchema.methods.matchPassword = async function(password){
  return bcrypt.compare(password,this.password)
}

const User = mongoose.model("User",userSchema);

module.exports = User;
