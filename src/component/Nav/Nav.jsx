import "./nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import mainlogo from "../../assets/libarylogo.png";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
  };

  return (
    <div className="nav-con">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <nav>
          <div className="logo-con">
            <Link
              onClick={() => {
                loading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
              to="/"
            >
              <img className="main-logo" src={mainlogo} alt="main logo" />
            </Link>
          </div>
          <div className="menu-con">
            <ul className="ul-nav">
              <li className="li-nav">
                <Link className="menu-a" to="/about">
                  {t("About")}
                </Link>
              </li>
              <li className="li-nav">
                <Link className="menu-a" to="/service">
                  {t("Service")}
                </Link>
              </li>
            </ul>
            <div className="lang-con">
              <Link
                onClick={() => {
                  changeLanguage("th"); // เรียกใช้ฟังก์ชัน changeLanguage โดยส่งค่า 'th' เข้าไป
                }}
                className="lang-a"
                to=""
              >
                ไทย
              </Link>
              <Link
                onClick={() => {
                  changeLanguage("en"); // เรียกใช้ฟังก์ชัน changeLanguage โดยส่งค่า 'en' เข้าไป   
                }}
                className="lang-a"
                to=""
              >
                ENG
              </Link>
              <span className="just-span">|</span>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Nav;
