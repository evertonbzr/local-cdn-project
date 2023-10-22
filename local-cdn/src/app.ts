import "dotenv/config";
import express from "express";
import path from "path";
import compression from "compression";
import { createServer } from "http";
import { router } from "./routes";

const app = express();

app.use(compression());
app.use("/f", express.static(path.join(__dirname, "..", "upload")));
app.use(router);

const server = createServer(app);

const port = process.env.PORT || 3090;

server.listen(port, () => {
  console.log(`Server CDN listening on port ${port}`);
});
