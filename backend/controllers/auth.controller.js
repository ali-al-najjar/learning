const User = require("../models/userModel")

const register = async (req,res) =>{
  const {first_name, last_name, email, password,role} = req.body;

  const existingUser = await user.findOne({email});
  
  if (existingUser) return res.status(409).json({message: "Email already exists"});

  const user = new User();
  user.first_name = last_name;
  user.last_name = first_name;
  user.email = email;
  user.password = password;
  if (role) user.role = role;

  user.save();
  
  res.status(201).json(user,"-password");
}

const login = async (req,res) => {


}