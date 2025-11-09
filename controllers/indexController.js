import { getTenPosts } from "../db/queries.js";

export async function intialPostsGet(req, res) {
  const posts = await getTenPosts(1);
  res.render("index", {
    posts: posts,
    page: 1,
  });
}

export async function nextPostsGet(req, res) {
  const currentPage = req.params.page;
  console.log(currentPage);
  const posts = await getTenPosts(currentPage);

  if (posts.length < 1) {
    res.redirect("/");
  } else {
    res.render("index", {
      posts: posts,
      page: currentPage,
    });
  }
}
