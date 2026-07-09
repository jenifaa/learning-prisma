import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
  console.log("Create User.", payload);

  const createdUser = await prisma.user.create({
    data: payload,
  });

  return createdUser;
};

const getAllFromDb = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      picture: true,
      createdAt: true,
      updatedAt: true,
      role: true,
      status: true,
      posts:true
    },
  });
  return result;
};

export const UserService = {
  createUser,
  getAllFromDb,
};
