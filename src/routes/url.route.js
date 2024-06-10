const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlshortener.controller");

router.post("/encode", urlController.encode);
module.exports = router;
