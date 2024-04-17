require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
const path = require("path");

//bodyParser
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "./client/dist")));
server.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`server started ${port}`);
});
