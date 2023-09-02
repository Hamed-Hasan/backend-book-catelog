"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
/* eslint-disable @typescript-eslint/consistent-type-definitions */
// Import necessary modules and types
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Define your service functions
const createCategory = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.category.create({
        data: {
            title: categoryData.title,
        },
    });
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.category.findMany();
});
const getCategoryById = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.category.findUnique({
        where: {
            id: categoryId,
        },
        include: {
            books: true, // Include related books
        },
    });
});
const updateCategory = (categoryId, updates) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.category.update({
        where: {
            id: categoryId,
        },
        data: {
            title: updates.title,
        },
    });
});
const deleteCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.category.delete({
        where: {
            id: categoryId,
        },
    });
});
exports.CategoryService = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
