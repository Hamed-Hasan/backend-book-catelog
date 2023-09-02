"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUser = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
        }).email({
            message: "Invalid email format",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }).min(6, {
            message: "Password must be at least 6 characters long",
        }),
        role: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional(),
    }),
});
const userSignin = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
        }).email({
            message: "Invalid email format",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }).min(6, {
            message: "Password must be at least 6 characters long",
        }),
    }),
});
exports.UserValidation = {
    createUser,
    userSignin,
};
