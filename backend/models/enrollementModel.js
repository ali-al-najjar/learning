const mongoose = require("mongoose")

const enrollementSchema = new mongoose.Schema({
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

const Enrollement = mongoose.model("Enrollement", enrollementSchema);

module.exports = Enrollement