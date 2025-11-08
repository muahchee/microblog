import { getAllPosts } from "../db/queries.js";

export async function allPostsGet(req, res) {
  const posts = await getAllPosts();
  res.render("index", {
    posts: posts,
  });
}
