import { Navigate, Route, Routes } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to={"/404"} />} />
      <Route path="/404" element={<h2>Upps ruta no encontrada</h2>} />
    </Routes>
  );
};
