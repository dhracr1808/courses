import { createContext, useContext } from "react";

export interface UserContextType {
  name: string;
  email: string;
  password: string;
}

interface UserContextProviderType {
  user: UserContextType;
  setUser: React.Dispatch<React.SetStateAction<UserContextType>>;
}

export const initialUserState: UserContextType = {
  name: "",
  email: "",
  password: "",
};

export const UserContextProvider = createContext<UserContextProviderType>({
  user: initialUserState,
  setUser: () => {},
});

export const useUserContext = () => {
  const context = useContext(UserContextProvider);
  if (!context.user && context.user !== initialUserState) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
