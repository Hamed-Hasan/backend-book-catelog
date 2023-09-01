import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthService } from './auth.service';

export const AuthController = {
  signup: async (req: Request, res: Response) => {
    try {
      const userData = req.body;
      const user = await AuthService.signup(userData);
      res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: 'User created successfully!',
        data: user,
      });
    } catch (error: any) { // Specify the type as 'any' or 'Error'
      res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        statusCode: error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Internal Server Error',
        data: null,
      });
    }
  },

  signin: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const token = await AuthService.signin(email, password);
      res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: 'User signin successfully!',
        token,
      });
    } catch (error: any) { // Specify the type as 'any' or 'Error'
      res.status(error.statusCode || httpStatus.UNAUTHORIZED).json({
        success: false,
        statusCode: error.statusCode || httpStatus.UNAUTHORIZED,
        message: error.message || 'Unauthorized',
        token: null,
      });
    }
  },
};
