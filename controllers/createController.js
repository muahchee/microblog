import { body, validationResult, matchedData } from "express-validator";
import { makePost } from "../db/queries.js";
import { toHtml } from "../helpers/mdConverter.js";

//env
import dotenv from "dotenv";
import { argv } from "node:process";
dotenv.config();
const env = argv.includes("dev") ? "dev" : "prod";

const validatePost = [body("text").trim(), body("imgalt").trim()];

export async function createGet(req, res) {
  res.render("create");
}

export const createPost = [
  validatePost,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("create", {
        errors: errors.array(),
      });
    }
    const { text, imgalt } = matchedData(req, { includeOptionals: true });

    const htmlText = toHtml(text);

    const filename = req.file ? req.file.filename : null;

    let timestamp;

    if (env === "dev") {
      timestamp = new Date();
    } else if ((env === "prod")) {
      let d = new Date();
      d.setHours(d.getHours() + 18)
      timestamp = d;
    }

    await makePost({
      userid: req.user.id,
      text: htmlText,
      timestamp: timestamp,
      imgfile: filename,
      imgalt: imgalt,
    });

    res.redirect("/");
  },
];
