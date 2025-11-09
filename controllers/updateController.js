import { body, validationResult, matchedData } from "express-validator";
import { editPost, getPostById } from "../db/queries.js";
import { toHtml } from "../helpers/mdConverter.js";
import { deleteUpload } from "../helpers/deleteUpload.js";

const validatePost = [body("text").trim(), body("imgalt").trim()];

export async function updateGet(req, res) {
  const id = req.params.id;
  const storedPost = await getPostById(id);
  res.render("update", { post: storedPost });
}

export const updatePost = [
  validatePost,
  async (req, res) => {
    const errors = validationResult(req);

    const id = req.params.id;
    const storedPost = await getPostById(id);

    if (!errors.isEmpty()) {
      return res.status(400).render("update", {
        errors: errors.array(),
        post: storedPost,
      });
    }
    const { text, imgalt } = matchedData(req, { includeOptionals: true });

    const htmlText = toHtml(text);

    let filename;

    if (req.file) {
      filename = req.file.filename;
      deleteUpload(storedPost.imgfile);
    } else {
      filename = storedPost.imgfile;
    }

    await editPost(id, {
      text: htmlText,
      imgfile: filename,
      imgalt: imgalt,
    });

    res.redirect("/");
  },
];
