const Course = require("../models/courseModel.js")

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find().populate("students.student", "-password");

  res.json(courses)
}

exports.getCourseById = async (req, res) => {
  const { id } = req.params;

  const course = await Course.findById(id)

  res.json(course);
}

exports.createCourse = async (req, res) => {
  const { title, description, instructor, duration, student } = req.body;

  const course = await Course.create({ title, description, instructor, duration, student});

  res.json(course)
}


exports.enrollStudent = async (req, res) => {
  const { student , course_id } = req.body;

  const course = await Course.findById(course_id);

  course.students.push({
    student
  })

  await course.save();
  res.json(course)
}

exports.withdrawalRequest = async (req,res)=>{

  const { course_id, student_id, flag } = req.body;
}


exports.withdrawal = async (req, res) => {
  const { course_id, student_id, flag } = req.body;

  if (flag == true){

  const course = await Course.findOneAndUpdate(
    { _id: course_id },
    {
      $pull: { students: { student: student_id } }
    },
    { new: true }
  )

  res.json(course)}
  else{
    res.json({message : "Withdrawal declined"})
  }
}