import { z } from "zod";

const schema = z
  .object({
    name: z.string().min(5, "El nombre debe tener al menos 5 caracteres"),
    email: z.email("El email no es valido").min(1, "El email es obligatorio"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La confimacion debe tener  6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
