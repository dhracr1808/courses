import { useState, type ReactNode } from "react";
import {
  UserContextProvider,
  type UserContextType,
  initialUserState,
} from "./useUserContext";

interface Props {
  children: ReactNode;
}

export const UserContext = ({ children }: Props) => {
  const [user, setUser] = useState<UserContextType>(initialUserState);
  return (
    <UserContextProvider.Provider value={{ user, setUser }}>
      {children}
    </UserContextProvider.Provider>
  );
};
