import e, { urlencoded } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import passport from "passport";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
const pgSession = connectPgSimple(session);

import dotenv from "dotenv";

import { pool } from "./db/pool.js";
import "./auth/passportConfig.js";
import { indexRouter } from "./routes/indexRouter.js";
import { createRouter } from "./routes/createRouter.js";
import { isAdmin } from "./auth/authMiddle.js";
import { deleteGet } from "./controllers/deleteController.js";

dotenv.config();

const app = e();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsPath = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

// console.log(__dirname)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(e.static(assetsPath));
app.use(urlencoded({ extended: true }));
app.use(e.json());

//-------passport auth stuff---------

const sessionStore = new pgSession({
  pool: pool,
});

app.use(
  session({
    store: sessionStore,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

//---------------routes-----------------

app.use("/", indexRouter);
app.use("/create", isAdmin, createRouter);
app.get("/:id/delete", isAdmin, deleteGet)

//--login/logout--

app.get("/login", (req, res) => {
  res.render("login");
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

//-------port and error handling---------

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
