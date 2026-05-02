import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid work email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().default(false).optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;
