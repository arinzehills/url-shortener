const request = require("supertest");
const app = require("../app");

describe("URL Shortener API", () => {
  it("should encode a URL", async () => {
    const res = await request(app)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("shortUrl");
  });
  it("should decode a URL", async () => {
    const resDecode = await request(app)
      .post("/api/decode")
      .send({ shortUrl: "http://short.est/gqcbv6" });
    expect(resDecode.statusCode).toEqual(200);
  });
});
