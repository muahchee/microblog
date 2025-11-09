import { deletePost, getPostById } from "../db/queries.js";
import { deleteUpload } from "../helpers/deleteUpload.js";

export async function deleteGet(req, res) {
  const id = req.params.id;
  const { imgfile } = await getPostById(id);

  deleteUpload(imgfile);

  await deletePost(id);
  res.redirect("/");
}
