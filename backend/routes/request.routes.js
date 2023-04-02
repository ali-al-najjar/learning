const { Router } = require("express");
const router = Router();

const { getAllRequests, ApproveDeclineRequest,createRequest} = require("../controllers/request.controller");

router.post("/create", createRequest);
router.get("/all", getAllRequests);
router.post("/decision", ApproveDeclineRequest);

module.exports = router;