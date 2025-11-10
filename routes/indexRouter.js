import { Router } from "express";
import { intialPostsGet, nextPostsGet } from "../controllers/indexController.js";
import { isAdmin } from "../auth/authMiddle.js";
import { deleteGet } from "../controllers/deleteController.js";
import { updateGet, updatePost } from "../controllers/updateController.js";
import { upload } from "../helpers/multerConfig.js";
import { emptySearchGet, intialResultPostsGet, nextResultPostsGet, searchPost } from "../controllers/searchController.js";


export const indexRouter = Router()

indexRouter.get("/", intialPostsGet)
indexRouter.get("/:page/page", nextPostsGet)
indexRouter.get("/0/pages", intialPostsGet)
indexRouter.get("/1/pages", intialPostsGet)

indexRouter.get("/:id/delete", isAdmin, deleteGet);

indexRouter.get("/:id/update", isAdmin, updateGet);
indexRouter.post("/:id/update", isAdmin, upload.single("imgfile"), updatePost);

indexRouter.get("/search", emptySearchGet)
indexRouter.post("/search", searchPost)
indexRouter.get("/1/search", intialResultPostsGet)
indexRouter.get("/:page/search", nextResultPostsGet)