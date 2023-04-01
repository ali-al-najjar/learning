const Enrollement = require("../models/enrollementModel.js")

exports.getAllEnrollements = async (req, res) => {
  const enrollements = await Enrollement.find();

  res.json(enrollements)
}

// exports.getCourseById = async (req, res) => {
//   const { id } = req.params;

//   const course = await Course.findById(id)

//   res.json(course);
// }

exports.createEnrollement = async (req, res) => {
  const { user_id , course_id } = req.body;

  const enrollement = await Enrollement.create({ user_id , course_id});

  res.json(enrollement)
}

exports.deleteEnrollement = async (req, res) => {
  const { user_id , course_id } = req.body;

  const enrollement = await Enrollement.delete({ user_id , course_id});

  res.json(enrollement)
}
