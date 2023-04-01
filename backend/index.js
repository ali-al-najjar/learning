const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();


app.listen(process.env.PORT, (err) => {
  if (err) console.error(err)
  console.log("Server is listening on port", process.env.PORT)
  require("./configs/db.config")
})

app.use("/me/:name",(req,res)=>{
  const name = req.params.name
  res.json({message: `Hello World from ${name}`})
})

app.use("/",(req,res)=>{
  res.json({message: "Hello World!"})
})


