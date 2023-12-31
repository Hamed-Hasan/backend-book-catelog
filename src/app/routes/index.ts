import express from 'express';
import { UserRoutes } from '../modules/User/route.user';
import { CategoryRoutes } from '../modules/Categories/category.routes';
import { BookRoutes } from '../modules/Book/book.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { orderRoutes } from '../modules/order/order.routes';
import { userProfileRoutes } from '../modules/Profile/profile.routes';

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
  {
    path: "/books",
    route: BookRoutes, 
  },
  {
    path: "/orders",
    route: orderRoutes, 
  },
  {
    path: "/profile",
    route: userProfileRoutes, 
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
