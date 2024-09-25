import Nav from "../../component/Nav/Nav";
import "./LoginPage.css";
import { useTranslation } from "react-i18next";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import { useUser } from "../../utils/UserContext";

function LoginPage({ onLogin }) {
  const { setUsername, ourmember } = useUser(); // ดึงฟังก์ชัน setUsername ออกมาจาก Context
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง

  // เพิ่ม state สำหรับเก็บ username และ password
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);

  const handleLogin = () => {
    for (let i = 0; i < ourmember.length; i++) {
      if (user === ourmember[i].name && password === ourmember[i].password) {
        // ถ้าตรง -> ให้เปลี่ยนเส้นทาง
        setUsername([user]); // อัปเดตชื่อผู้ใช้งาน
        onLogin();
        navigate(`/${lang}/room`);
      } else {
        setUser("");
        setPassword("");
        // ถ้าไม่ตรง -> แสดงข้อความแจ้งเตือน
        setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Login-Page-con">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div className="login-page">
            <div className="login-box-con">
              <div className="blur-login-backgound"></div>
              <div className="login-box">
                <div className="userinput-con">
                  <label>ชื่อผู้ใช้งาน หรือ อีเมล</label>
                  <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>

                <div className="passwordinput-con">
                  <label>รหัสผ่าน</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <p className="error-mes" style={{ color: "red" }}>
                    {error}
                  </p>
                )}

                <div className="login-btn-con">
                  <button onClick={handleLogin} className="log-btn">
                    เข้าสู่ระบบ
                  </button>
                  <Link to={`/${lang}/singup`} className="nolog-btn">
                    ยังไม่ได้เป็นสมาชิก?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LoginPage;
