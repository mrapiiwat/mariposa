import React from "react";
import "./SingUp.css";
import Nav from "../../component/Nav/Nav";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SingUp = () => {
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง

  const changeLanguage = (lng) => {
    e.preventDefault();
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);
  return (
    <div className="sing-up-page-con">
      <Nav />
      <div className="sing-up-page">
        <div className="blursingup"></div>
        <div className="box-singup">
          <div className="sing-up-top">
            <div className="sing-up-left">
              <div className="sing-up-left-top">
                <label>อีเมล</label>
                <input type="email" />
              </div>
              <div className="sing-up-left-bot">
                <label>ชื่อผู้ใช้งาน</label>
                <input type="text" />
              </div>
            </div>
            <div className="sing-up-right">
              <div className="sing-up-right-top">
                <label>รหัสผ่าน</label>
                <input type="password" />
              </div>
              <div className="sing-up-right-bot">
                <label>ยืนยันรหัสผ่านอีกครั้ง</label>
                <input type="password" />
              </div>
            </div>
          </div>
          <div className="sing-up-but">
            <Link to={`/${lang}/login`} className="sing-up-btn">สมัคร</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
