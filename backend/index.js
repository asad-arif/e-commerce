const express = require("express");

const app = express();

const connectDB = async () => {};

app.get("/", (req, res) => {
  res.send("App is working fine");
});

app.listen(4000);
