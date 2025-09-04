import { useState } from "react";

import { GlobalContext } from "./useGlobalContext";

interface GlobalProps {
  children: React.ReactNode;
}
const emptyGlobalState: number = 0;

export const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<number>(emptyGlobalState);
  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};
