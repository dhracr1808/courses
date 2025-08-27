import type React from "react";
import "./inputForm.css";
import { Controller, type Control, type FieldError } from "react-hook-form";
import type { FormValues } from "./models/form";
interface Props extends React.ComponentPropsWithRef<"input"> {
  label: string;
  control: Control<FormValues>;
  error?: FieldError;
  name: keyof FormValues;
}

export const InputForm = ({ label, name, error, control, ...rest }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            {...field}
            {...rest}
            className={`form-control ${error ? "is-invalid" : ""}`}
          />
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};
