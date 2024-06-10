const urlService = require("../services/urlshortener.service");

const encode = (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = urlService.encode(longUrl);
  console.log("Short Url Produced");
  res.json({ shortUrl });
};
module.exports = { encode };
