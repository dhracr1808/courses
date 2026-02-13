import { Navigate, Route } from "react-router-dom";
import { Dashboar } from "@/private/Dashboar";
import { AdminPanel } from "@/private/AdminPage";
import { RoutesWithNotFound } from "@/components/RoutesWithNotFound";
import { AdminGuard } from "@/guard/admin.guard";
export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={"/dashboard"} />} />
      <Route path="/dashboard" element={<Dashboar />} />
      <Route element={<AdminGuard />}>
        <Route path="dashboard/admin" element={<AdminPanel />} />
      </Route>
    </RoutesWithNotFound>
  );
};
