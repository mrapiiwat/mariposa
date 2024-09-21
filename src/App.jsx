import HomePage from "./mariposa/HomePage/HomePage";
import AboutPage from "./mariposa/AboutPage/AboutPage";
import ServicePage from "./mariposa/ServicePage/ServicePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameRoom from "./mariposa/GameRoom/GameRoom";
import { useState, useEffect } from "react";
import "./App.css";
import MemberPage from "./mariposa/AboutPage/MemberPage/MemberPage";
import Loader from "./component/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/gameroom",
    element: <GameRoom />,
  },
  {
    path: "about/member",
    element: <MemberPage />,
  },
]);

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="fade-content">
          <RouterProvider router={router} />
        </div>
      )}
    </div>
  );
}

export default App;
