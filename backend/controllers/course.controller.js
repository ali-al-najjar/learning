const Course = require("../models/courseModel.js")

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();

  res.json(courses)
}

exports.getCourseById = async (req, res) => {
  const { id } = req.params;

  const course = await Course.findById(id)

  res.json(course);
}

exports.createCourse = async (req, res) => {
  const { title, content, start_date, end_date } = req.body;

  const course = await Course.create({ title, content, start_date, end_date });

  res.json(course)
}
