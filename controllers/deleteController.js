import {deletePost} from "../db/queries.js"

export async function deleteGet(req, res) {
  const id = req.params.id;
  await deletePost(id);
  res.redirect("/")
}