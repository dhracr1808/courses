import { createContext, useContext } from "react";

interface GlobalContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  value: 0,
  setValue: () => {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context.value && context.value !== 0) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
