import { useRef } from "react";

export const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      console.log(value);
      inputRef.current.value = "";

      inputRef.current.focus();
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" onBlur={onBlur} />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};
