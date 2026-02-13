import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Login } from "@/public/Login";
import { PrivateGuard } from "./guard/private.guard";

import { RoutesWithNotFound } from "@/components/RoutesWithNotFound";
import { PrivateRouter } from "@/private.router";
interface Props {
  children: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      {children}
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateGuard />}>
          <Route path="/private/*" element={<PrivateRouter />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
