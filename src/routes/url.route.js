const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlshortener.controller");

router.post("/encode", urlController.encode);
router.post("/decode", urlController.decode);
router.get("/statistic/:urlPath", urlController.getStatistic);

module.exports = router;
