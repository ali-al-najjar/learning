const { Router } = require("express");
const router = Router();

const { createCourse , getAllCourses,enrollStudent} = require("../controllers/course.controller");

router.post("/add", createCourse);
router.get("/all", getAllCourses);
router.post("/enroll", enrollStudent);

module.exports = router;