const router = require("express").Router();

const upload = require("../middleware/uploadMiddleware");

router.post(
  "/",

  upload.single("image"),

  (req, res) => {
    res.json({
      path: req.file.path,
    });
  },
);

module.exports = router;
