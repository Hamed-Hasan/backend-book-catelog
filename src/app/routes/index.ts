import express from 'express';
import { UserRoutes } from '../modules/User/route.user';
import { authRoutes } from '../modules/User/auth.route';
import { CategoryRoutes } from '../modules/Categories/category.routes';

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
  {
    path: "/categories",
    route: CategoryRoutes, 
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
