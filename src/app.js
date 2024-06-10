const express = require("express");
const app = express();
const urlRoutes = require("./routes/url.route");

app.use(express.json());
app.use("/api", urlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port:: http://localhost:${PORT}/`);
});

module.exports = app;
