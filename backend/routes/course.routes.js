const { Router } = require("express");
const router = Router();

const { createCourse , getAllCourses,enrollStudent} = require("../controllers/course.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");

router.post("/add", authMiddleware,adminMiddleware, createCourse);
router.get("/all", authMiddleware,getAllCourses);
router.post("/enroll", authMiddleware,enrollStudent);

module.exports = router;