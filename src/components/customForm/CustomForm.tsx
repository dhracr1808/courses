import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type FormValues, schema } from "./models/form";
import { InputForm } from "./InputForm";

export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const submit: SubmitHandler<FormValues> = (data) => {
    console.log("datos enviados");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputForm
        name="name"
        label="name"
        type="text"
        control={control}
        error={errors.name}
      />
      <InputForm
        name="email"
        label="email"
        type="email"
        control={control}
        error={errors.email}
      />

      <InputForm
        name="password"
        label="password"
        type="password"
        control={control}
        error={errors.password}
      />

      <InputForm
        name="confirmPassword"
        label="confirm password"
        type="password"
        control={control}
        error={errors.confirmPassword}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};
