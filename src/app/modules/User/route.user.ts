import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from './controller.user'; // Import controller functions
import { UserValidation } from './validation.user';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', 
auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
getUserById);

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUser),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  updateUser
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  deleteUser
);

export const UserRoutes = router;
