import { useState } from "react";
import { Button, ColorRed, AppForm } from "./components";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Hola !");
  };

  const otraFuncion = () => {
    alert("Hola !");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    target.childNodes.forEach((el) => {
      console.log(el);
    });
    console.log("Formulario enviado");
  };

  return (
    <>
      <ColorRed>
        <Button parentMethod={otraFuncion}>Boton color rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>boton normal</Button>
      <AppForm>
        <input
          data-regex="^.{5,}$"
          name="username"
          type="text"
          placeholder="Escribe tu nombre"
        />
        <input name="lastname" type="text" placeholder="Escribe tu apellido" />
        <input
          name="password"
          type="password"
          placeholder="Escribe tu contraseña"
        />
        <button type="submit">Enviar</button>
      </AppForm>
    </>
  );
}

export default App;
