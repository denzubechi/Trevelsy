import { Routes as BrowserRoutes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/Home/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRoutes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/home" element={<LandingPage />} />
    </BrowserRoutes>
  );
};

export default AppRoutes;
