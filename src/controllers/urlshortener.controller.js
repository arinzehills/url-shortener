const urlService = require("../services/urlshortener.service");

const encode = (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).json({ message: "Url is required" });
  }
  console.log(longUrl);
  const shortUrl = urlService.encodeService(longUrl);
  console.log("Short Url Produced");
  res.json({ shortUrl });
};
const decode = (req, res) => {
  const { shortUrl } = req.body;
  const longUrl = urlService.decodeService(shortUrl);
  res.json({ longUrl });
};
const getStatistic = (req, res) => {
  const { urlPath } = req.params;
  const stats = urlService.getStatisticService(urlPath);
  res.json(stats);
};
module.exports = { encode, decode, getStatistic };
