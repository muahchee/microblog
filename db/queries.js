import { pool } from "./pool.js";
import format from "pg-format";


export async function getUserById(id) {
  const sql = format("SELECT * FROM users WHERE id=%s;", id);
  const { rows } = await pool.query(sql);
  return rows[0];
}

export async function getPostById(id) {
  const sql = format("SELECT * FROM posts WHERE id=%s;", id);
  const { rows } = await pool.query(sql);
  return rows[0];
}

export async function getUserbyUsername(username) {
  const sql = format("SELECT * FROM users WHERE username LIKE %L", username);

  const { rows } = await pool.query(sql);
  return rows[0];
}

export async function getAllPosts() {
  const sql = "SELECT * FROM posts;";

  const { rows } = await pool.query(sql);
  return rows;
}

export async function getTenPosts(page) {
  const sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 10 OFFSET ($1 - 1) * 10;";

  const { rows } = await pool.query(sql, [page]);
  return rows;
}

export async function makePost(obj) {
  const sql =
    "INSERT INTO posts (userid, text, timestamp, imgfile, imgalt) VALUES ($1, $2, $3, $4, $5)";

  await pool.query(sql, [obj.userid, obj.text, obj.timestamp, obj.imgfile, obj.imgalt]);
}

export async function deletePost(postid) {
  const sql = format("DELETE FROM posts WHERE id=%s;", postid);

  await pool.query(sql);
}
