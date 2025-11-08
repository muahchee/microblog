import { Router } from "express";
import { createGet, createPost } from "../controllers/createController.js";
import multer from "multer";

export const createRouter = Router();

const upload = multer({ dest: "./public/uploads/" });

createRouter.get("/", createGet);
createRouter.post("/", upload.single("imgfile"), createPost);
