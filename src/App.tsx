import { useState } from "react";
import { Button } from "./components";

import "./App.css";

const buttonStyles = {
  primary: {
    color: "#ffffff",
    background: "#651fff",
    transition: "all 1s ease",
  },
  secondary: {
    color: "#651fff",
    background: "#ffffff",
    transition: "all 1s ease",
  },
  dark: { color: "#ffffff", background: "#5d5d5d", transition: "all 1s ease" },
};
function App() {
  const [count, setCount] = useState(0);
  const [myState, setMyState] = useState(true);
  const [name, setName] = useState("Diego");
  const countMore = () => {
    return setCount((cur) => cur + 1);
  };

  const changeName = () => {
    setName("pedro");
  };
  return (
    <>
      <button
        style={myState ? buttonStyles.primary : buttonStyles.dark}
        onClick={() => setMyState((cur) => (cur = !cur))}
      >
        {myState ? "active" : "desactive"}
      </button>

      <Button label={`Count is: ${count}`} parentMethod={countMore} />
      <p>{name}</p>
      <Button
        style={buttonStyles.primary}
        label="Change Name"
        parentMethod={changeName}
      />
    </>
  );
}

export default App;
