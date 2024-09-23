import "./nav.css";
import { Link, useParams, useNavigate } from "react-router-dom"; // เพิ่ม useNavigate
import { useState, useEffect } from "react";
import mainlogo from "../../assets/libarylogo.png";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";

const Nav = () => {
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);

  return (
    <div className="nav-con">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <nav>
          <div className="logo-con">
            <Link
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
              to={`/${lang}/home`} // แก้ให้ลิงก์นำไปยัง path ที่มีภาษารวมอยู่
            >
              <img className="main-logo" src={mainlogo} alt="main logo" />
            </Link>
          </div>
          <div className="menu-con">
            <ul className="ul-nav">
              <li className="li-nav">
                <Link className="menu-a" to={`/${lang}/about`}>
                  {t("About")}
                </Link>
              </li>
              <li className="li-nav">
                <Link className="menu-a" to={`/${lang}/service`}>
                  {t("Service")}
                </Link>
              </li>
            </ul>
            <div className="lang-con">
              <a
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    changeLanguage("th");
                    setLoading(false);
                  }, 1000);
                }}
                className="lang-a"
              >
                ไทย
              </a>
              <a
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    changeLanguage("en");
                    setLoading(false);
                  }, 1000);
                }}
                className="lang-a"
              >
                ENG
              </a>
              <span className="just-span">|</span>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nav;
