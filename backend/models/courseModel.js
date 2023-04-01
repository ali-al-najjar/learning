const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  }

})

const Course = mongoose.model("Course", blogSchema);

module.exports = Course