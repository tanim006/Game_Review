import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Games from "./Components/Games/Games";
import AgentDetails from "./Components/AgentDetails/AgentDetails";
import { HelmetProvider } from "react-helmet-async";
import GameDetails from "./Components/GamesDetails/GameDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Parent component with Navbar and Footer
    children: [
      {
        path: "/",
        element: <Home />, // Home page component
      },
      {
        path: "/data/:id",
        element: <AgentDetails></AgentDetails>,
        loader: () => fetch("/Data.json"),
      },
      {
        path : "/Pages-to-Read",
        element: <GameDetails></GameDetails>,
      },
      {
        path: "/game",
        element: <Games />, // Games page component, full replacement
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
