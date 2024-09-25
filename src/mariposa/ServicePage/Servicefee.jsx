import React from "react";
import Nav from "../../component/Nav/Nav";
import "./Servicefee.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Servicefee = () => {
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
    <div className="servicefee_con">
      <Nav />
      <div className="servicefee">
        <div className="servicefee_detail">
          <div className="servicefee_title">
            {t("servicefee_title")}
          </div>
          <div className="servicefee_doc">
            <div className="servicefee_list">
              <div className="listofservice">
                <div className="listofservice1">{t("listofservice1")}</div>
                <div className="listofservice2">{t("listofservice2")}</div>
              </div>
              <div className="listofservice">
                <div className="listofservice3">{t("listofservice3")}</div>
                <div className="listofservice4">{t("listofservice4")}</div>
              </div>
              <div className="listofservice">
                <div className="listofservice5">{t("listofservice5")}</div>
                <div className="listofservice6">{t("listofservice6")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicefee;
