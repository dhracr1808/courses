import React, { useRef } from "react";
import { useGlobalContext } from "./../../context/useGlobalContext";
import { useUserContext } from "./../../context/useUserContext";

interface Props extends React.ComponentPropsWithRef<"form"> {
  children: React.ReactNode;
}

const createTable = (n: number) => {
  for (let i = 1; i <= 12; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
  }
};

export const AppForm = ({ children, ...rest }: Props) => {
  const { setValue, value } = useGlobalContext();
  const { user, setUser } = useUserContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const setLogin = () => {
    const value = Number(inputRef.current?.value) || 0;
    createTable(value);
    setUser({
      name: inputRef.current?.value || "",
      email: "john@example.com",
      password: "123456",
    });
  };
  return (
    <form {...rest}>
      {children}
      <h2>{value}</h2>
      <h2>
        {user.name} - {user.email} - {user.password}
      </h2>
      <button type="button" onClick={() => setValue(10)}>
        cancelar
      </button>
      <input type="text" ref={inputRef} name="description" />
      <button type="button" onClick={() => setLogin()}>
        login
      </button>
    </form>
  );
};
