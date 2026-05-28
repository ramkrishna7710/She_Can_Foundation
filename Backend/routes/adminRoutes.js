const router = require("express").Router();
const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {getMessages, deleteMessage} = require("../controllers/adminController");

router.get("/messages", protect, admin, getMessages);

router.delete("/messages/:id", protect, admin, deleteMessage);

module.exports = router;
