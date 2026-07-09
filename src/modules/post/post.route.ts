import { Router } from "express";
import { PostControllers } from "./post.controller";


const router = Router();

router.post("/create", PostControllers.createPost);


export const postRouter = router;
