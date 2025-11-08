import { Router } from "express";
import { allPostsGet } from "../controllers/indexController.js";

export const indexRouter = Router()

indexRouter.get("/", allPostsGet)