import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@/public/Login";
import { Dashboar } from "@/private/Dashboar";
import { AdminPanel } from "@/private/AdminPage";

import { PrivateGuard } from "./guard/private.guard";
import { AdminGuard } from "./guard/admin.guard";

interface Props {
  children: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateGuard />}>
          <Route path="/private" element={<Dashboar />} />
          <Route element={<AdminGuard />}>
            <Route path="/private/admin" element={<AdminPanel />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
