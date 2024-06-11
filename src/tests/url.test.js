const request = require("supertest");
const app = require("../app");

describe("URL Shortener API", () => {
  it("should encode a URL", async () => {
    const res = await request(app)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("shortUrl");
    expect(resDecode.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("should decode a URL", async () => {
    const resEncode = await request(app)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });

    const { shortUrl } = resEncode.body;

    const resDecode = await request(app).post("/api/decode").send({ shortUrl });

    expect(resDecode.statusCode).toEqual(200);
    expect(resDecode.body.longUrl).toEqual("https://indicina.co");
    expect(resDecode.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("should return statistics for a URL", async () => {
    const resEncode = await request(app)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });

    const { shortUrl } = resEncode.body;
    const urlPath = shortUrl.split("/").pop();

    const resStats = await request(app).get(`/api/statistic/${urlPath}`);

    expect(resStats.statusCode).toEqual(200);
    expect(resStats.body).toHaveProperty("longUrl");
    expect(resStats.body).toHaveProperty("visits");
  });
});
