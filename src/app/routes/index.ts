import express from 'express';
import { UserRoutes } from '../modules/User/route.user';
import { authRoutes } from '../modules/User/auth.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: authRoutes, 
  },
  {
    path: "/users",
    route: UserRoutes, 
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
