import { useState } from "react";
import { ModalContext } from "./useModalContext";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        state,
        openModal: () => setState(true),
        closeModal: () => setState(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
