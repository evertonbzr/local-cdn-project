import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs-extra";

fs.ensureDirSync(path.join(__dirname, "..", "upload"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "upload"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage });

const router = Router();

router.use("/buckets", require("./modules/buckets/routes").router);

export { router, upload };
