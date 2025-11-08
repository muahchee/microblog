import dotenv from "dotenv";
import { pool } from "./pool.js";
import bcrypt from "bcryptjs";

dotenv.config();

async function addMe(obj) {
  const sql =
    "INSERT INTO users (username, password, admin) VALUES ($1, $2, true)";

  await pool.query(sql, [obj.username, obj.password]);
}

async function privateSignup() {
  const username = process.env.ADMIN_NAME;
  const password = process.env.ADMIN_PW;

  try {
    const hashedPw = await bcrypt.hash(password, 10);
    await addMe({
      username: username,
      password: hashedPw,
    });
  } catch (err) {
    return console.log(err);
  }
}

privateSignup();
