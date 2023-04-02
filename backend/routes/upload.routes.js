const { Router } = require("express");
const router = Router();

const { createFile , getAllFiles } = require("../controllers/file.controller");

router.post("/upload", authMiddleware , adminMiddleware,createFile);
router.get("/all", authMiddleware , adminMiddleware,getAllFiles);

module.exports = router;