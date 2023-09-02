"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIdFromToken = exports.getUserRoleFromToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const getUserRoleFromToken = (token) => {
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.jwt.secret);
        return decodedToken.role || null;
    }
    catch (error) {
        return null;
    }
};
exports.getUserRoleFromToken = getUserRoleFromToken;
const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, config_1.default.jwt.secret);
        return decodedToken.userId || null;
    }
    catch (error) {
        return null;
    }
};
exports.getUserIdFromToken = getUserIdFromToken;
