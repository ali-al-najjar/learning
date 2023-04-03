const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.json());
const cors = require('cors')
app.use(cors())

const authRouter = require("./routes/auth.routes")
const courseRouter = require("./routes/course.routes")
const requestRouter = require("./routes/request.routes")
const uploadRouter = require("./routes/upload.routes")

app.use('/uploads', express.static('uploads'));

app.use('/auth',authRouter);
app.use('/course',courseRouter);
app.use('/request', requestRouter);
app.use('/file', uploadRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.error('Here is the err')
  console.log("Server is listening on port", process.env.PORT)
  require("./configs/db.config")
})


