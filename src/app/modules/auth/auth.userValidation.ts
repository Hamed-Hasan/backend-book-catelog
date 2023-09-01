import { z } from "zod";

const createUser = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }).email({
      message: "Invalid email format",
    }),
    password: z.string({
      required_error: "Password is required",
    }).min(6, {
      message: "Password must be at least 6 characters long",
    }),
    role: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

const userSignin = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }).email({
      message: "Invalid email format",
    }),
    password: z.string({
      required_error: "Password is required",
    }).min(6, {
      message: "Password must be at least 6 characters long",
    }),
  }),
});

export const UserValidation = {
  createUser,
  userSignin,
};
