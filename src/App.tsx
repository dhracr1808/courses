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
  return (
    <>
      <ColorRed>
        <Button parentMethod={otraFuncion}>Boton color rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>boton normal</Button>
      <AppForm>
        <Button parentMethod={otraFuncion}>
          <span>Submit</span>
        </Button>
      </AppForm>
    </>
  );
}

export default App;
