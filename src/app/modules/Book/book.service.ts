import prisma from "../../../shared/prisma";
import { Book } from '@prisma/client';  // Make sure to import the Book type
import { BookData } from "./book.type";



export const BookService = {
    createBook: async (bookData: BookData): Promise<Book> => {
        return prisma.book.create({
          data: {
            ...bookData,
            categoryId: bookData.categoryId, // Assign categoryId directly
          },
          include: { category: true }, // Include the associated category details
        });
      },

      
      getAllBooks: async (paginationOptions: any, filterOptions: any, orderByOptions: any): Promise<Book[]> => {
        return prisma.book.findMany({
          ...paginationOptions,
          where: filterOptions,
          orderBy: orderByOptions,
          include: { category: true },
        });
      },
      
    
      countBooks: async (filterOptions: any): Promise<number> => {
        return prisma.book.count({
          where: filterOptions,
        });
      },

  getBookById: async (bookId: string): Promise<Book | null> => {
    return prisma.book.findUnique({
      where: { id: bookId },
    });
  },

  getBooksByCategoryId: async (categoryId: string): Promise<Book[]> => {
    try {
      // console.log("Fetching books by category with ID:", categoryId);
      const books = await prisma.book.findMany({
        where: { categoryId },
      });
      // console.log("Fetched books:", books);
      return books;
    } catch (error) {
      console.error("Error fetching books by category:", error);
      throw new Error("An error occurred while fetching books by category");
    }
  },
  
  

  updateBook: async (
    bookId: string,
    updates: Partial<BookData>
  ): Promise<Book> => {
    return prisma.book.update({
      where: { id: bookId },
      data: updates,
    });
  },

  deleteBook: async (bookId: string): Promise<Book> => {
    return prisma.book.delete({
      where: { id: bookId },
    });
  },
};
