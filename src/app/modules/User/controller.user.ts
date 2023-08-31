import { Request, Response } from "express";
import httpStatus from "http-status";
import { UserService } from "./service.user";


const createUser = async (req: Request, res: Response) => {
  const userData = req.body;

  const user = await UserService.createUser(userData);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully!",
    data: user,
  });
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Users retrieved successfully",
    data: users,
  });
};

const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await UserService.getUserById(userId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "User fetched successfully",
    data: user,
  });
};

const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const updates = req.body;

  const updatedUser = await UserService.updateUser(userId, updates);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully",
    data: updatedUser,
  });
};

const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const deletedUser = await UserService.deleteUser(userId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "User deleted successfully",
    data: deletedUser,
  });
};

export {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
