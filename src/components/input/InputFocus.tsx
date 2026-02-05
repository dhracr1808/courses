import { useRef } from "react";

export const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef.current) {
      console.log("no existe la referencia la elemento");
      return;
    }
    inputRef.current.focus();
    const value = inputRef.current.value;
    console.log(value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};
