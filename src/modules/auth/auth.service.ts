import { prisma } from "../../config/db";

const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new Error("user not found");
  }
  if (user.password === password) {
    return user;
  } else {
    throw new Error("invalid credentials");
  }
};

export const AuthService = {
  loginWithEmailAndPassword,
};
