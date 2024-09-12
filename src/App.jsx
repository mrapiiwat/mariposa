import HomePage from "./mariposa/HomePage/HomePage";
import AboutPage from "./mariposa/AboutPage/AboutPage";
import ServicePage from "./mariposa/ServicePage/ServicePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameRoom from "./mariposa/GameRoom/GameRoom";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./App.css";
import Logo from "./assets/mariposalogo1.png";

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
        <div className="load-con">
          <img className="Applogo" src={Logo} alt="" />
          <PulseLoader className="loader" loading={loading} size={5} color="#00408c"/>
        </div>
      ) : (
        <div className="fade-content">
          <RouterProvider router={router} />
        </div>
        
      )}
    </div>
  );
}

export default App;
