import { body, validationResult, matchedData } from "express-validator";
import { makePost } from "../db/queries.js";

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

    const filename = req.file ? req.file.filename : null;

    await makePost({
      userid: req.user.id,
      text: text,
      timestamp: new Date().toLocaleDateString(),
      imgfile: filename,
      imgalt: imgalt,
    });

    res.redirect("/");
  },
];
