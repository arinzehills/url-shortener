const { generateId } = require("../utils/idGenerator");
const urls = new Map();

const encode = (longUrl) => {
  const id = generateId();
  console.log("ID Generated", id);
  urls.set(id, { longUrl, visits: 0 });
  return `http://short.est/${id}`;
};

module.exports = { encode };
