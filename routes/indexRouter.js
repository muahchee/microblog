import { Router } from "express";
import { intialPostsGet, nextPostsGet } from "../controllers/indexController.js";

export const indexRouter = Router()

indexRouter.get("/", intialPostsGet)
indexRouter.get("/:page/page", nextPostsGet)
indexRouter.get("/0/pages", intialPostsGet)
indexRouter.get("/1/pages", intialPostsGet)