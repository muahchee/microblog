import { Router } from "express";
import { createGet, createPost } from "../controllers/createController.js";
import multer from "multer";

export const createRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/public/uploads");
  },
  filename: function (req, file, cb) {
    const filetype = file.mimetype;

    let ext;

    if (filetype === "image/jpeg") {
      ext = ".jpeg";
    } else if (filetype === "image/png") {
      ext = ".png";
    } else if (filetype === "image/gif") {
      ext = ".gif";
    }

    console.log(file)

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({ dest: "./public/uploads/" });

createRouter.get("/", createGet);
createRouter.post("/", upload.single("imgfile"), createPost);
