"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_userValidation_1 = require("./auth.userValidation");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(auth_userValidation_1.UserValidation.createUser), auth_controller_1.AuthController.signup);
router.post('/signin', (0, validateRequest_1.default)(auth_userValidation_1.UserValidation.userSignin), auth_controller_1.AuthController.signin);
exports.authRoutes = router;
