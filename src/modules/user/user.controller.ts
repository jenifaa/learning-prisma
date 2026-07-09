import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send(result);
 
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
    console.log(error)
  }
};
const getAllFromDb = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllFromDb();
    res.send(result);
  
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
    console.log(error)
  }
};





export const UserControllers = {
  createUser,
  getAllFromDb
};
