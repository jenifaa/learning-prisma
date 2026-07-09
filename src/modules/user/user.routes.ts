import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.post("/create", UserControllers.createUser);
router.get("/getAll", UserControllers.getAllFromDb);

export const userRouter = router;
