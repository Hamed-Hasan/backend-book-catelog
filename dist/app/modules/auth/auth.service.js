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
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
exports.AuthService = {
    signup: (userData) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const existingUser = yield prisma_1.default.user.findUnique({
                where: { email: userData.email },
            });
            if (existingUser) {
                throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Email is already in use');
            }
            const hashedPassword = yield bcrypt_1.default.hash(userData.password, Number(config_1.default.bycrypt_salt_rounds));
            const newUser = yield prisma_1.default.user.create({
                data: Object.assign(Object.assign({}, userData), { password: hashedPassword }),
            });
            return newUser;
        }
        catch (error) {
            throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
        }
    }),
    signin: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield prisma_1.default.user.findUnique({ where: { email } });
            // console.log(user?.role)
            if (!user) {
                throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid email or password');
            }
            const isPasswordMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!isPasswordMatch) {
                throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid email or password');
            }
            const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, config_1.default.jwt.secret, {
                expiresIn: config_1.default.jwt.expires_in,
            });
            return token;
        }
        catch (error) {
            throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message);
        }
    }),
};
