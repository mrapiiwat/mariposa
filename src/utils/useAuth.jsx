
import { useState } from "react";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    // เก็บข้อมูลการล็อกอินใน localStorage ได้
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    // ลบข้อมูลการล็อกอินใน localStorage
    localStorage.removeItem("isAuthenticated");
  };

  return { isAuthenticated, login, logout };
}

export default useAuth;
