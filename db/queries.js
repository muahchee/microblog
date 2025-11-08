import { pool } from "./pool.js";
import format from "pg-format";


export async function getUserById(id) {
  const sql = format("SELECT * FROM users WHERE id=%s;", id);
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

export async function makePost(obj) {
  const sql =
    "INSERT INTO posts (text, timestamp, imgfile, imgalt) VALUES ($1, $2, $3, $4)";

  await pool.query(sql, [obj.text, obj.timestamp, obj.imgfile, obj.imgalt]);
}

export async function deletePost(postid) {
  const sql = format("DELETE FROM posts WHERE id=%s;", postid);

  await pool.query(sql);
}
