import { deletePost, getPostById } from "../db/queries.js";
import fs from "node:fs/promises";

export async function deleteGet(req, res) {
  const id = req.params.id;
  const { imgfile } = await getPostById(id);

  //------delete uploaded img--------
  if (imgfile && imgfile.length > 0) {
    const imgPath = process.cwd() + `/public/uploads/${imgfile}`;
    if (imgPath) {
      await fs.rm(imgPath, { recursive: true }, (err) => {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log("File deleted successfully");
      });
    }
  }
  await deletePost(id);
  res.redirect("/");
}
