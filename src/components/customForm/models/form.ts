import z from "zod";

export const schema = z
  .object({
    name: z
      .string("Este campo es obligatorio")
      .min(5, "El nombre debe tener al menos 5 caracteres"),
    email: z.email("El email no es valido").min(1, "El email es obligatorio"),
    password: z
      .string("Este campo es obligatorio")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string("Este campo es obligatorio")
      .min(6, "La confimacion debe tener  6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;
