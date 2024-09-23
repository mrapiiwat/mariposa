import "./NavLogin.css";
import { Link, useParams, useNavigate } from "react-router-dom"; // เพิ่ม useParams และ useNavigate
import userPic from "../../assets/user.png";
import mainlogo from "../../assets/libarylogo.png";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";

const NavLogin = () => {
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([
    {
      name: "Guest",
      img: userPic,
    },
  ]);
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  return (
    <div className="nav-log-con">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <nav>
          <div className="logo-con">
            <Link to="/">
              <img className="main-logo" src={mainlogo} alt="main logo" />
            </Link>
          </div>
          <div className="menu-con">
            <ul className="ul-nav-log">
              <li className="li-nav-log">
                <img className="userPic" src={user[0].img} alt="" />
                <div className="user-con">
                  <p className="p-name">{user[0].name}</p>
                  <MdOutlineExpandMore className="expand" />
                </div>
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

export default NavLogin;
