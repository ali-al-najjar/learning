const { Router } = require("express");
const router = Router();

const { createCourse , getAllCourses,withdrawal, enrollStudent} = require("../controllers/course.controller");

router.post("/add", createCourse);
router.get("/all", getAllCourses);
router.post("/enroll", enrollStudent);
router.post("/withdraw", withdrawal);

module.exports = router;