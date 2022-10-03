import { Routes, Route} from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter, PublicRoute } from "./";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>} />

            <Route path="/*" element={
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>
            } />
        </Routes>
    </>
  )
}
