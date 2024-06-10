const urlService = require("../services/urlshortener.service");

const encode = (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).json({ message: "Url is required" });
  }
  console.log(longUrl);
  const shortUrl = urlService.encode(longUrl);
  console.log("Short Url Produced");
  res.json({ shortUrl });
};
module.exports = { encode };
