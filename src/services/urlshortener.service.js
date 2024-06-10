const { generateId } = require("../utils/idGenerator");
const urls = new Map();

const encode = (longUrl) => {
  const id = generateId();
  console.log("ID Generated", id);
  return `http://short.est/${id}`;
};

module.exports = { encode };
