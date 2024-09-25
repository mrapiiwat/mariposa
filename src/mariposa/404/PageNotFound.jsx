import React from "react";
import "./PageNotFound.css";
import logo from "../../assets/mariposalogo1.png";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const PageNotFound = () => {
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);

  return (
    <div className="page-not-found-con">
      <div className="page-not-found-img-con">
        <Link to={`/${lang}/room`}>
          <img src={logo} className="page-not-found-img" />
        </Link>
      </div>
      <div className="page-not-found-some-text">
        <h1 className="four-zoro-four-title">404</h1>
        <div className="some-expland-page">
          <p>The page you were looking for doesn't exit.</p>
          <p>You may have mistyped the address or the page may have moved.</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
