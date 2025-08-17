import { useCallback, useMemo, useState } from "react";
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

  const currentStyle = useMemo(() => {
    console.log("se re calcula");
    if (count <= 5) return buttonStyles.primary;
    if (count <= 10) return buttonStyles.secondary;
    return buttonStyles.dark;
  }, [count]);

  console.log("ok");
  const countMore = () => {
    return setCount((cur) => cur + 1);
  };
  const increment = useCallback(() => {
    console.log("ok useCallback");
    setCount((c) => c + 1);
  }, []);
  return (
    <>
      <button style={currentStyle} onClick={increment}>
        count is {count}
      </button>

      <button
        style={myState ? buttonStyles.primary : buttonStyles.dark}
        onClick={() => setMyState((cur) => (cur = !cur))}
      >
        {myState ? "active" : "desactive"}
      </button>

      <Button label={`Count is: ${count}`} parentMethod={countMore} />
    </>
  );
}

export default App;
