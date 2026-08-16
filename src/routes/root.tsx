import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ),
});