import { useContext, createContext } from "react";

export interface ModalContextProps {
  state: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  state: false,
  openModal: () => {},
  closeModal: () => {},
});

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModalContext must be used within a ModalProvider");
  return context;
};
