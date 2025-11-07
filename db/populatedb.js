#! /usr/bin/env node
import { Client } from "pg";
import dotenv from "dotenv";
import { argv } from "node:process";
import { getEnv } from "../helpers/getEnv.js";

dotenv.config();

const { connectionString } = getEnv(argv);

const SQL = `
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  timestamp TIMESTAMP,
);

CREATE TABLE IF NOT EXISTS images (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  postid INTEGER REFERENCES posts,
  filname TEXT,
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
