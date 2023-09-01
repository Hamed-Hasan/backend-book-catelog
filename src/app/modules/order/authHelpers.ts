import jwt from 'jsonwebtoken';
import config from '../../../config';

export const getUserRoleFromToken = (token: string): string | null => {
  try {
    const decodedToken: any = jwt.verify(token, config.jwt.secret);
    return decodedToken.role || null;
  } catch (error) {
    return null;
  }
};

export const getUserIdFromToken = (token: string): string | null => {
  try {
    const decodedToken: any = jwt.verify(token, config.jwt.secret);
    return decodedToken.userId || null;
  } catch (error) {
    return null;
  }
};