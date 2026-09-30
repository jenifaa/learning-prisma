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

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedUser = await UserService.updateUser(
      Number(id),
      req.body
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update User Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update user",
      error,
    });
  }
};




export const UserControllers = {
  createUser,
  getAllFromDb,
  updateUser
};
