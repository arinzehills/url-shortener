const express = require("express");
const app = express();
const urlRoutes = require("./routes/url.route");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use("/api", urlRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port:: http://localhost:${PORT}/`);
});

module.exports = app;
