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
module.exports = { encodeService, decodeService };
