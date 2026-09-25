import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send(result);
 
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
    console.log(error)
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getAllFromDb();

    res.status(200).json({
      success: true,
      message: "Posts retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve posts",
    });
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await PostService.getSingleFromDb(Number(id));

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Post not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Post retrieved successfully",
    data: result,
  });
};


const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await PostService.deletePostFromDb(Number(id));

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete post",
      error,
    });
  }
};
export const PostControllers ={
    createPost,
    getAllPosts,
    getSinglePost,
    deletePost
}