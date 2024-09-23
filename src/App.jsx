import HomePage from "./mariposa/HomePage/HomePage";
import AboutPage from "./mariposa/AboutPage/AboutPage";
import ServicePage from "./mariposa/ServicePage/ServicePage";
import { useTranslation } from "react-i18next";
import "./i18n.js";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Navigate,
} from "react-router-dom";
import GameRoom from "./mariposa/GameRoom/GameRoom";
import { useState, useEffect } from "react";
import "./App.css";
import MemberPage from "./mariposa/AboutPage/MemberPage/MemberPage";
import Loader from "./component/Loader/Loader";
import Booking from "./mariposa/Booking/ฺBooking";
import ConferenceRoom  from "./mariposa/ConferenceRoom/ConferenceRoom";

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams(); // ดึงภาษาออกจาก URL path
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/th/home" replace />,
  },
  {
    path: "/:lang/home",
    element: (
      <LanguageWrapper>
        <HomePage />
      </LanguageWrapper>
    ),
  },
  {
    path: "/:lang/about",
    element: (
      <LanguageWrapper>
        <AboutPage />
      </LanguageWrapper>
    ),
  },
  {
    path: "/:lang/service",
    element: (
      <LanguageWrapper>
        <ServicePage />
      </LanguageWrapper>
    ),
  },
  {
    path: "/:lang/gameroom",
    element: (
      <LanguageWrapper>
        <GameRoom />
      </LanguageWrapper>
    ),
  },
  {
    path: "/:lang/about/member",
    element: (
      <LanguageWrapper>
        <MemberPage />
      </LanguageWrapper>
    ),
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/ConferenceRoom",
    element: <ConferenceRoom />,
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
