import { getTenPosts, getTenPostsSearch } from "../db/queries.js";
//env
import dotenv from "dotenv";
import { argv } from "node:process";
dotenv.config();
const env = argv.includes("dev") ? "dev" : "prod";

//---- /search -----
export async function emptySearchGet(req, res) {
  const posts = await getTenPosts(1);

  let timestamp

  if (env === "dev") {
    timestamp = new Date().toLocaleDateString("en-NZ");
  } else if ((env === "prod")) {
    let d = new Date();
    d.setHours(d.getHours() + 18);
    timestamp = d.toLocaleDateString("en-NZ")
  }

  console.log(env, timestamp.split("-").reverse().join("-"))
  //yyyy-mm-dd
  const today = String(timestamp.split("-").reverse().join("-"));

  res.render("search", {
    posts: posts,
    page: 1,
    empty: true,
    date1: today,
    date2: today,
  });
}

export async function searchPost(req, res) {
  const date1 = req.body.date1;
  const date2 = req.body.date2;
  res.redirect(`/1/search?date1=${date1}&date2=${date2}`);
}

//---- /1/search/:date1/:date2

export async function intialResultPostsGet(req, res) {
  let posts;
  let date1;
  let date2;

  if (req.query) {
    date1 = req.query.date1;
    date2 = req.query.date2;
    posts = await getTenPostsSearch(1, date1, date2);
  } else {
    posts = await getTenPosts(1);
  }

  res.render("search", {
    posts: posts,
    page: 1,
    empty: false,
    date1: date1,
    date2: date2,
  });
}

//---- /:page/search?date1=date1&date2=date2

export async function nextResultPostsGet(req, res) {
  const currentPage = req.params.page;
  let posts;
  let date1;
  let date2;

  if (req.query) {
    date1 = req.query.date1;
    date2 = req.query.date2;
    posts = await getTenPostsSearch(currentPage, date1, date2);
  } else {
    posts = await getTenPosts(currentPage);
  }

  if (posts.length < 1) {
    res.redirect(`/1/search?date1=${date1}&date2=${date2}`);
  } else {
    res.render("search", {
      posts: posts,
      page: currentPage,
      empty: false,
      date1: date1,
      date2: date2,
    });
  }
}
