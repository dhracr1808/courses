import { useState, useRef } from "react";

export const Bookreader = () => {
  const [curentPage, setCurrentpage] = useState(1);
  const currentPageRef = useRef<number>(curentPage);

  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avansaste a la página ${currentPageRef.current}`);
  };

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log(
        "No se puede ir a la página por que ya te encuentras en ",
        currentPageRef.current,
      );
      return;
    }
    currentPageRef.current -= 1;
    console.log(`Retrocediste a la página ${currentPageRef.current}`);
  };

  const goToPage = (page: number) => {
    if (page <= 0) {
      console.log("no se puede ir a una página imposible");
      return;
    }
    currentPageRef.current = page;
    setCurrentpage(page);
    console.log(`Saltaste a la página ${currentPageRef.current}`);
  };

  return (
    <div>
      <h2>Lectura del libro</h2>
      <p>pagina actual: {currentPageRef.current}</p>
      <button onClick={nextPage}>Ir a siguiente pagina </button>
      <button onClick={previousPage}>Ir al anterior pagina </button>
      <button onClick={() => goToPage(10)}>ir a la pagina 10 </button>
    </div>
  );
};
