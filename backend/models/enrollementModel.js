const mongoose = require("mongoose")

const EnrollementSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  course_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  }

})

const Enrollement = mongoose.model("Enrollement", EnrollementSchema);

module.exports = Enrollement