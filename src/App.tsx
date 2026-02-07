import { useState } from "react";
import "./App.css";
import { Modal } from "./modal/Modal";
import { useModalContext } from "./modal/useModalContext";

function App() {
  const { openModal } = useModalContext();
  const [currentModal, setCurrentModal] = useState<number>(0);
  const openModalWithId = (id: number) => {
    setCurrentModal(id);
    openModal();
  };
  return (
    <>
      <h1>hello word</h1>
      <button onClick={() => openModalWithId(0)}>Open Modal 1</button>
      <button onClick={() => openModalWithId(1)}>Open Modal 2</button>

      <Modal keySkip>
        <h1>Modal {currentModal}</h1>
        {currentModal === 0 && <p>This is the content of Modal 1</p>}
        {currentModal === 1 && <p>This is the content of Modal 2</p>}
      </Modal>
    </>
  );
}

export default App;
