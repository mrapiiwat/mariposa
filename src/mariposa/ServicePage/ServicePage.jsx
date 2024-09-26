import Nav from "../../component/Nav/Nav";
import "./ServicePage.css";
import libaryImage from "../../assets/libarybuilding.jpg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ServicePage = () => {
  const { lang } = useParams(); 
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
    navigate(`/${lng}${window.location.pathname.slice(3)}`); 
  };

  useEffect(() => {
    i18n.changeLanguage(lang); 
  }, [lang, i18n]);
  return (
    <div className="servicepage-con">
      <Nav />
      <div className="servicepage">
        {/* Service Detail. Tell more about service and fees in libary. */}
        <div className="service_detail">
          <div className="service_detail_left">
            <div className="left_title">{t("left_title")}</div>
            <div className="left_detail">{t("left_detail")}</div>
            <div className="left_servicedetail">
              {t("left_servicedetail")}
              <ul>
                <li className="left_li1">{t("left_li1")}</li>
                <li className="left_li2">{t("left_li2")}</li>
              </ul>
            </div>
            <div className="left_golink">
              <Link to={`/${lang}/servicefee`}>
              {t("left_golink")}
              </Link>
            </div>
          </div>

          <div className="service_detail_right">
            <div className="right_title">{t("right_title")}</div>

            <div className="right_week">
              <div className="right_day1">{t("right_day1")}</div>
              <div className="right_time1">{t("right_time1")}</div>
            </div>

            <div className="right_weekend">
              <div className="right_day2">{t("right_day2")}</div>
              <div className="right_time2">{t("right_time2")}</div>
            </div>

            <div className="right_holiday">
              <div className="right_day3">{t("right_day3")}</div>
              <div className="right_time3">{t("right_time3")}</div>
              <div className="right_note">
                {t("right_note")}
              </div>
            </div>
          </div>
        </div>

        {/* Floorplan. Show what libary looks like */}
        <div className="service_floorplan">
          <div className="service_floorplan_left">
            <div className="floorplan_title">
            {t("floorplan_title")}
            </div>
            <div className="floorplan_detail">
            {t("floorplan_detail")}
              <ul>
                <li className="floorplan_li1">
                {t("floorplan_li1")}
                </li>
                <li className="floorplan_li2">
                {t("floorplan_li2")}
                </li>
                <li className="floorplan_li3">
                  {t("floorplan_li3")}</li>
                <li className="floorplan_li4">
                  {t("floorplan_li4")}
                </li>
              </ul>
            </div>
            <div className="floorplan_golink">
              <Link to={`/${lang}/floorplan`}>{t("floorplan_golink")}</Link>
            </div>
          </div>
          <div className="service_floorplan_right">
            <div className="floorplan_img">
              <img src={libaryImage} alt="libary building" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
