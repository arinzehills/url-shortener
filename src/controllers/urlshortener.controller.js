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
const decode = (req, res) => {
  const { shortUrl } = req.body;
  const longUrl = urlService.decode(shortUrl);
  res.json({ longUrl });
};
module.exports = { encode, decode };
