import { Router } from "express";
import { createGet, createPost } from "../controllers/createController.js";
import { upload } from "../helpers/multerConfig.js";

export const createRouter = Router();

createRouter.get("/", createGet);
createRouter.post("/", upload.single("imgfile"), createPost);
