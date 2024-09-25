import { Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function ProtectedRoute({ isAuthenticated, children }) {
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);
  if (!isAuthenticated) {
    return <Navigate to={`/${lang}/login`} replace />;
  }
  return children;
}

export default ProtectedRoute;
