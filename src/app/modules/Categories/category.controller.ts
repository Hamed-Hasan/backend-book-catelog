import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CategoryService } from './category.service';

const createCategory = async (req: Request, res: Response) => {
  const categoryData = req.body;

  const category = await CategoryService.createCategory(categoryData);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: category,
  });
};

const getAllCategories = async (req: Request, res: Response) => {
  const categories = await CategoryService.getAllCategories();

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories fetched successfully',
    data: categories,
  });
};

const getCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category = await CategoryService.getCategoryById(categoryId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category fetched successfully',
    data: category,
  });
};

const updateCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const updates = req.body;

  const updatedCategory = await CategoryService.updateCategory(categoryId, updates);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category updated successfully',
    data: updatedCategory,
  });
};

const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const deletedCategory = await CategoryService.deleteCategory(categoryId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category deleted successfully',
    data: deletedCategory,
  });
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
