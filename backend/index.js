const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());

const authRouter = require("./routes/auth.routes")
const courseRouter = require("./routes/course.routes")
const requestRouter = require("./routes/request.routes")

app.use('/auth',authRouter);
app.use('/course',courseRouter);
app.use('/request', requestRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.error('Here is the err')
  console.log("Server is listening on port", process.env.PORT)
  require("./configs/db.config")
})


