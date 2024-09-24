import Nav from "../../component/Nav/Nav";
import "./LoginPage.css";
import { useTranslation } from "react-i18next";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {

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
    <div className="Login-Page-con">
      <Nav />
      <div className="login-page">
        <div className="login-box-con">
          <div className="blur-login-backgound"></div>
          <div className="login-box">
            <div className="userinput-con">
              <label>ชื่อผู้ใช้งาน หรือ อีเมล</label>
              <input type= "text" />
            </div>

            <div className="passwordinput-con">
              <label>รหัสผ่าน</label>
              <input type= "password" />
            </div>
            <div className="login-btn-con">
              <Link to={`/${lang}/room`} className="log-btn">เข้าสู่ระบบ</Link> 
              <Link to={`/${lang}/singup`} className="nolog-btn">ยังไม่ได้เป็นสมาชิก?</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
