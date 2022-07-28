const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    res.send("Hello World!");
  } catch {
    return res.status(500).send("server error");
  }
});
module.exports = router;
