import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email("invalid email"),
  password: z.string().min(8, "password must be at least 8 characters"),
});

export type AuthInput = z.infer<typeof AuthSchema>;
