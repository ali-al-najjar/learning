const { Router } = require("express");
const router = Router();

const { createFile , getAllFiles } = require("../controllers/file.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");

router.post("/upload", authMiddleware , adminMiddleware,createFile);
router.get("/all", authMiddleware , adminMiddleware,getAllFiles);

module.exports = router;