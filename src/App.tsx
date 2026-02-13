import "./App.css";
import { useState } from "react";
import { Modal } from "./modal/Modal";
import { useModalContext } from "./modal/useModalContext";
import { PromiseError } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  const { openModal } = useModalContext();
  const [currentModal, setCurrentModal] = useState<number>(0);
  const openModalWithId = (id: number) => {
    setCurrentModal(id);
    openModal();
  };

  return (
    <>
      <Toaster gutter={10}></Toaster>
      <h1>hello word</h1>
      <button onClick={() => openModalWithId(0)}>Open Modal 1</button>
      <button onClick={() => openModalWithId(1)}>Open Modal 2</button>

      <Modal keySkip>
        <h1>Modal {currentModal}</h1>
        {currentModal === 0 && <PromiseError id={currentModal + 1} />}
        {currentModal === 1 && <PromiseError id={currentModal + 1} />}
      </Modal>
    </>
  );
}

export default App;
