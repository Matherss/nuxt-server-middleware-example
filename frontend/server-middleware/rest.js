const app = require("express")();
const axios = require("axios");

app.all("/", async (req, res) => {
  const result = await axios.get("http://localhost:1337/api/home");
  res.send(result.data.data.attributes.content);
});

module.exports = app;
