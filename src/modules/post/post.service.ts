import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
  console.log("Create Post.", payload);

  const createdPost = await prisma.post.create({
    data: payload,
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        
        },
      },
    },
  });

  return createdPost;
};

const getAllFromDb = async () => {
  const result = await prisma.post.findMany();
  return result;
};

export const PostService = {
  createPost,
  getAllFromDb,
};
