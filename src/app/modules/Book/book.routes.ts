import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(BookValidation.create),
  BookController.createBook
);

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.get('/category-bookById/:categoryId', BookController.getBooksByCategoryId);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(BookValidation.update),
  BookController.updateBook
);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN), BookController.deleteBook);

export const BookRoutes = router;
