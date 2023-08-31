import { Prisma, User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createUser = async (userData: Prisma.UserCreateInput): Promise<User> => {
  const user = await prisma.user.create({
    data: userData,
  });
  return user;
};

const getAllUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (userId: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { id: userId }, // Parse the string to an integer
  });
  return user;
};

const updateUser = async (
  userId: string,
  userData: Prisma.UserUpdateInput
): Promise<User | null> => {
  const updatedUser = await prisma.user.update({
    where: { id: userId}, // Parse the string to an integer
    data: userData,
  });
  return updatedUser;
};

const deleteUser = async (userId: string): Promise<User | null> => {
  const deletedUser = await prisma.user.delete({
    where: { id: userId }, // Parse the string to an integer
  });
  return deletedUser;
};

export const UserService = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
