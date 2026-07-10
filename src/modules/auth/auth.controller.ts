import { Request, Response } from "express";
import { AuthService } from "./auth.service";




const loginWithEmailAndPassword = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginWithEmailAndPassword(req.body);
    res.send(result);
 
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
    console.log(error)
  }
};








export const AuthController = {
    loginWithEmailAndPassword
}