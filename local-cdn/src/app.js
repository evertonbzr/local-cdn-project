const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const compression = require("compression");
const { createServer } = require("http");
dotenv.config();

const app = express();

app.use(compression());

app.use(express.static(path(__dirname, "..", "public")));

const server = createServer(app);

const port = process.env.PORT || 3090;

server.listen(port, () => {
  console.log(`Server CDN listening on port ${port}`);
});
