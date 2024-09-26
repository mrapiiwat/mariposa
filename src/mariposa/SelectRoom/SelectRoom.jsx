import NavLogin from "../../component/Nav/NavLogin";
import "./SelectRoom.css";
import { useTranslation } from "react-i18next";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";

const SelectRoom = () => {
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // สร้าง navigate สำหรับการนำทาง
  const [loading, setLoading] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษาโดยใช้ฟังก์ชัน changeLanguage
    navigate(`/${lng}${window.location.pathname.slice(3)}`); // เปลี่ยนภาษาที่ path เดิม
  };

  useEffect(() => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษาตาม URL path
  }, [lang, i18n]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="SelectRoom-con">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavLogin />
          <div className="selectroom">
            <div className="select-room">
              <Link to={`/${lang}/conference`}>
                <div className="conroom">
                  <div className="blurconroom"></div>
                  <h1 className="conroomtext">{t("conroom-title")}</h1>
                </div>
              </Link>
              <Link to={`/${lang}/cinemaroom`}>
                <div className="cineroom">
                  <div className="blurcineroom"></div>
                  <h1 className="cineroomtext">{t("cinema-title")}</h1>
                </div>
              </Link>

              <Link to={`/${lang}/gameroom`}>
                <div className="gameroom">
                  <div className="blurgameroom"></div>
                  <h1 className="gameroomtext">{t("gameroom-title")}</h1>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectRoom;
