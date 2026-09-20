import { Router } from "express";
import { PostControllers } from "./post.controller";


const router = Router();

router.post("/create", PostControllers.createPost);
router.get("/", PostControllers.getAllPosts);
router.get("/:id", PostControllers.getSinglePost);

export const postRouter = router;
