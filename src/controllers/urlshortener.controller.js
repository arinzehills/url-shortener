const urlService = require("../services/urlshortener.service");

const encode = (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).json({ message: "Url is required" });
  }
  console.log(longUrl);
  const shortUrls = urlService.encode(longUrl);
  console.log("Short Url Produced");
  res.json({ shortUrls });
};
module.exports = { encode };
