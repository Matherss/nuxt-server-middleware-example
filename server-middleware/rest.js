const app = require("express")();

app.all("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
