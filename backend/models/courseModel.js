const mongoose = require("mongoose")


const enrollSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
})


const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor:{
    type: String,
    required: true
  },
  duration:{
    type: String,
    required: true
  },
  students: [enrollSchema]

})



const Course = mongoose.model("Course", courseSchema);

module.exports = Course