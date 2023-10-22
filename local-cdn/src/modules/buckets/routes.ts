import { Router } from "express";
import { createBucket } from "./create-bucket";
import { upload } from "../../routes";

const router = Router();

router.post("/create-bucket", upload.single("file"), createBucket);

export { router };
