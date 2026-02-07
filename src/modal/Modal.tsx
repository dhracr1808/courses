import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./useModalContext";
import "./Modal.css";
interface ModalProps {
  children: React.ReactNode;
  keySkip?: boolean;
}

const eventListener = "keydown";

export const Modal = ({ children, keySkip }: ModalProps) => {
  const { state, closeModal } = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    if (!keySkip) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (state) window.addEventListener(eventListener, handleKeyDown);

    return () => {
      window.removeEventListener(eventListener, handleKeyDown);
    };
  }, [closeModal, state]);

  if (!state || !modalRoot) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={closeModal}
    >
      <div
        style={{ backgroundColor: "#484848", padding: "20px" }}
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>,
    modalRoot,
  );
};
