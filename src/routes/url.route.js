const express = require("express");
const router = express.Router();

router.post("/encode", async (req, res) => {
  res.sendStatus(200);
});
module.exports = router;
