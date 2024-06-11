const { generateId } = require("../utils/idGenerator");
const urls = new Map();

const encodeService = (longUrl) => {
  const id = generateId();
  console.log("ID Generated", id);
  urls.set(id, { longUrl, visits: 0 });
  return `http://short.est/${id}`;
};
const decodeService = (shortUrl) => {
  const id = shortUrl.split("/").pop();
  const urlData = urls.get(id);
  if (urlData) {
    urlData.visits += 1;
    return urlData.longUrl;
  }
  return null;
};
const getStatisticService = (urlPath) => {
  const urlData = urls.get(urlPath); //get the map
  if (urlData) {
    console.log({ longUrl: urlData.longUrl, visits: urlData.visits });
    return { longUrl: urlData.longUrl, visits: urlData.visits };
  }
  return null;
};
module.exports = { encodeService, decodeService, getStatisticService };
