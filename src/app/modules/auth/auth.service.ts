import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import prisma from '../../../shared/prisma';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';

export const AuthService = {
  signup: async (userData: User): Promise<User> => {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });

      if (existingUser) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email is already in use');
      }

      const hashedPassword = await bcrypt.hash(userData.password, Number(config.bycrypt_salt_rounds));
      const newUser = await prisma.user.create({
        data: { ...userData, password: hashedPassword },
      });

      return newUser;
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  },

  signin: async (email: string, password: string): Promise<string> => {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
        console.log(user?.role)
      if (!user) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid email or password');
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid email or password');
      }

      const token = jwt.sign({ userId: user.id, role: user.role }, config.jwt.secret, {
        expiresIn: config.jwt.expires_in,
      });

      return token;
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  },
};
