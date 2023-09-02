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
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.create({
        data: userData,
    });
    return user;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findMany();
    return users;
});
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { id: userId }, // Parse the string to an integer
    });
    return user;
});
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield prisma_1.default.user.update({
        where: { id: userId },
        data: userData,
    });
    return updatedUser;
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield prisma_1.default.user.delete({
        where: { id: userId }, // Parse the string to an integer
    });
    return deletedUser;
});
exports.UserService = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
