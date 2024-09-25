import "./App.css";
import "./i18n.js";
import {createBrowserRouter, RouterProvider, useParams, Navigate} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { UserProvider } from "./utils/UserContext.jsx";
import GameRoom from "./mariposa/GameRoom/GameRoom";
import HomePage from "./mariposa/HomePage/HomePage";
import AboutPage from "./mariposa/AboutPage/AboutPage";
import ServicePage from "./mariposa/ServicePage/ServicePage";
import MemberPage from "./mariposa/AboutPage/MemberPage/MemberPage";
import Loader from "./component/Loader/Loader";
import LoginPage from "./mariposa/LoginPage/LoginPage.jsx";
import SelectRoom from "./mariposa/SelectRoom/SelectRoom.jsx";
import ConferenceRoom from "./mariposa/ConferenceRoom/ConferenceRoom.jsx";
import SingUp from "./mariposa/LoginPage/SingUp.jsx";
import PageNotFound from "./mariposa/404/PageNotFound.jsx";
import ProtectedRoute from "./utils/isAuthenticated.jsx";
import useAuth from "./utils/useAuth.jsx";

function App() {
  const { isAuthenticated, login, logout } = useAuth(); // ดึงสถานะล็อกอินจาก useAuth
  const [loading, setLoading] = useState(false);

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
      path: "/:lang/about/member",
      element: (
        <LanguageWrapper>
          <MemberPage />
        </LanguageWrapper>
      ),
    },
    {
      path: "/:lang/singup",
      element: (
        <LanguageWrapper>
          <SingUp />
        </LanguageWrapper>
      ),
    },
    {
      path: "/:lang/login",
      element: (
        <LanguageWrapper>
          <LoginPage onLogin={login} />
        </LanguageWrapper>
      ),
    },
    {
      path: "/:lang/room",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <LanguageWrapper>
            <SelectRoom />
          </LanguageWrapper>
        </ProtectedRoute>
      ),
    },
    {
      path: "/:lang/conference",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <LanguageWrapper>
            <ConferenceRoom />
          </LanguageWrapper>
        </ProtectedRoute>
      ),
    },
    {
      path: "/:lang/gameroom",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <LanguageWrapper>
            <GameRoom />
          </LanguageWrapper>
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

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
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </div>
      )}
    </div>
  );
}

export default App;
