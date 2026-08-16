import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { rootRoute } from "./routes/root";
import { indexRoute } from "./routes/index";
import "./index.css";
import { aboutRoute } from "./routes/about";
import { projectsRoute } from "./routes/projects";
import { blogRoute } from "./routes/blog";
import { contactRoute } from "./routes/contact";
import { projectDetailRoute } from "./routes/projectDetail";
import { blogPostRoute } from "./routes/blogPost";

// This builds the full tree: rootRoute is the trunk, indexRoute is a branch
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  projectDetailRoute,
  blogRoute,
  blogPostRoute,
  contactRoute,

]);

const router = createRouter({ routeTree });

// TypeScript-specific: this line registers the router's types globally,
// so things like route paths get autocomplete/type-checking everywhere.
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);