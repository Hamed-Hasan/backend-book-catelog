"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_user_1 = require("../modules/User/route.user");
const category_routes_1 = require("../modules/Categories/category.routes");
const book_routes_1 = require("../modules/Book/book.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const order_routes_1 = require("../modules/order/order.routes");
const profile_routes_1 = require("../modules/Profile/profile.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/auth",
        route: auth_routes_1.authRoutes,
    },
    {
        path: "/users",
        route: route_user_1.UserRoutes,
    },
    {
        path: "/categories",
        route: category_routes_1.CategoryRoutes,
    },
    {
        path: "/books",
        route: book_routes_1.BookRoutes,
    },
    {
        path: "/orders",
        route: order_routes_1.orderRoutes,
    },
    {
        path: "/profile",
        route: profile_routes_1.userProfileRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
