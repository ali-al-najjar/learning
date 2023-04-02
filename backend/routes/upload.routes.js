const { Router } = require("express");
const router = Router();

const { createFile , getAllFiles } = require("../controllers/file.controller");

router.post("/upload", createFile);
router.get("/all", getAllFiles);

module.exports = router;