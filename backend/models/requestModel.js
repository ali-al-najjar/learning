const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  flag: {
    type : Boolean,
    default: false
  }
})




const Withdraw = mongoose.model("Request", RequestSchema);

module.exports = Withdraw