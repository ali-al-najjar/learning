const WithdrawRequest = require("../models/requestModel.js")
const Course = require("../models/courseModel.js")

exports.getAllRequests = async (req, res) => {
  const requests = await WithdrawRequest.find().populate("student","-password").populate("course")

  res.json(requests)
}


exports.createRequest = async (req, res) => {
  const { student_id, course_id , reason, flag } = req.body;

  const request = await WithdrawRequest.create({ student:student_id, course:course_id, reason, flag});

  res.json(request)
}


exports.ApproveDeclineRequest = async(req,res)=>{
  const { student_id, course_id , flag } = req.body;
  
  if (flag = true){

  const course = await Course.findOneAndUpdate(
    { _id: course_id },
    {
      $pull: { students: { student: student_id } }
    },
    { new: true }
  )

  res.json(request)}
  else{
    res.json({message: "Withdrawal Declined"})
  }
}

