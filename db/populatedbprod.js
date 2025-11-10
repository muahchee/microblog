#! /usr/bin/env node
import { Client } from "pg";
import dotenv from "dotenv";
import { argv } from "node:process";
import { getEnv } from "../helpers/getEnv.js";

dotenv.config();

const { connectionString } = getEnv(argv);

const SQL = `

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  password VARCHAR(255),
  admin BOOLEAN
);

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  userid INTEGER REFERENCES users,
  text TEXT,
  timestamp TIMESTAMP,
  imgfile TEXT,
  imgalt VARCHAR(255)
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

