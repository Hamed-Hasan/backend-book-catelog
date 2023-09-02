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
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
exports.BookService = {
    createBook: (bookData) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.book.create({
            data: Object.assign(Object.assign({}, bookData), { categoryId: bookData.categoryId }),
            include: { category: true }, // Include the associated category details
        });
    }),
    getAllBooks: (paginationOptions, filterOptions, orderByOptions) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.book.findMany(Object.assign(Object.assign({}, paginationOptions), { where: filterOptions, orderBy: orderByOptions, include: { category: true } }));
    }),
    countBooks: (filterOptions) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.book.count({
            where: filterOptions,
        });
    }),
    getBookById: (bookId) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.book.findUnique({
            where: { id: bookId },
        });
    }),
    getBooksByCategoryId: (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // console.log("Fetching books by category with ID:", categoryId);
            const books = yield prisma_1.default.book.findMany({
                where: { categoryId },
            });
            // console.log("Fetched books:", books);
            return books;
        }
        catch (error) {
            console.error("Error fetching books by category:", error);
            throw new Error("An error occurred while fetching books by category");
        }
    }),
    updateBook: (bookId, updates) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.book.update({
            where: { id: bookId },
            data: updates,
        });
    }),
    deleteBook: (bookId) => __awaiter(void 0, void 0, void 0, function* () {
        return prisma_1.default.book.delete({
            where: { id: bookId },
        });
    }),
};
