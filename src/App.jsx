import HomePage from "./mariposa/HomePage/HomePage";
import AboutPage from "./mariposa/AboutPage/AboutPage";
import ServicePage from "./mariposa/ServicePage/ServicePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameRoom from "./mariposa/GameRoom/GameRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "service",
    element: <ServicePage />,
  },
  {
    path: "gameroom",
    element: <GameRoom />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
