const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());

const authRouter = require("./routes/auth.routes")

app.use('/auth',authRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.error('Here is the err')
  console.log("Server is listening on port", process.env.PORT)
  require("./configs/db.config")
})


