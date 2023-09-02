"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const auth_service_1 = require("./auth.service");
exports.AuthController = {
    signup: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userData = req.body;
            const user = yield auth_service_1.AuthService.signup(userData);
            res.status(http_status_1.default.OK).json({
                success: true,
                statusCode: http_status_1.default.OK,
                message: 'User created successfully!',
                data: user,
            });
        }
        catch (error) { // Specify the type as 'any' or 'Error'
            res.status(error.statusCode || http_status_1.default.INTERNAL_SERVER_ERROR).json({
                success: false,
                statusCode: error.statusCode || http_status_1.default.INTERNAL_SERVER_ERROR,
                message: error.message || 'Internal Server Error',
                data: null,
            });
        }
    }),
    signin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const token = yield auth_service_1.AuthService.signin(email, password);
            res.status(http_status_1.default.OK).json({
                success: true,
                statusCode: http_status_1.default.OK,
                message: 'User signin successfully!',
                token,
            });
        }
        catch (error) { // Specify the type as 'any' or 'Error'
            res.status(error.statusCode || http_status_1.default.UNAUTHORIZED).json({
                success: false,
                statusCode: error.statusCode || http_status_1.default.UNAUTHORIZED,
                message: error.message || 'Unauthorized',
                token: null,
            });
        }
    }),
};
