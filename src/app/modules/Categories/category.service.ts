/* eslint-disable @typescript-eslint/consistent-type-definitions */
// Import necessary modules and types
import prisma from "../../../shared/prisma";
import { CategoryValidation } from "./category.interface";


// Define your service functions
const createCategory = async (categoryData: CategoryValidation['create']['input']) => {
  return prisma.category.create({
    data: {
      title: categoryData.title,
    },
  });
};

const getAllCategories = async () => {
  return prisma.category.findMany();
};

const getCategoryById = async (categoryId: string) => {
  return prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      books: true, // Include related books
    },
  });
};

const updateCategory = async (categoryId: string, updates: CategoryValidation['update']['input']) => {
  return prisma.category.update({
    where: {
      id: categoryId,
    },
    data: {
      title: updates.title,
    },
  });
};

const deleteCategory = async (categoryId: string) => {
  return prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
