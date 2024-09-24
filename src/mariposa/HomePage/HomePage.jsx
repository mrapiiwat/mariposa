import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../../component/Nav/Nav";
import "./HomePage.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const HomePage = () => {
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

  return (
    <div className="home-page-con">
      <Nav />
      <main className="homePage-main-content">
        <div className="bulr-back"></div>
        <div className="home-content">
          <h1 className="home-h1">
            {t('Library')}
            <br />
            {t('mariposaU')}
          </h1>
          <Link to={`/${lang}/login`} className="home-login-btn">{t('Log-in')}</Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
