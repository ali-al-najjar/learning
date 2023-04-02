const { Router } = require("express");
const router = Router();

const { getAllRequests, ApproveDeclineRequest,createRequest} = require("../controllers/request.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");

router.post("/create",authMiddleware, createRequest);
router.get("/all", authMiddleware , adminMiddleware ,getAllRequests);
router.post("/decision", authMiddleware , adminMiddleware,ApproveDeclineRequest);

module.exports = router;