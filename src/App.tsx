import { useState } from "react";
import { Button } from "./components";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Hola !");
  };

  return (
    <>
      <Button label={`Count is: ${count}`} parentMethod={handleClick} />
    </>
  );
}

export default App;
