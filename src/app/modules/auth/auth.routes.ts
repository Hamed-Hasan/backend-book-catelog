import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './auth.userValidation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.createUser),
  AuthController.signup 
);

router.post(
  '/signin',
  validateRequest(UserValidation.userSignin),
  AuthController.signin
);

export const authRoutes = router;
