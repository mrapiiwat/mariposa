import React from 'react'
import Nav from "../../component/Nav/Nav";
import "./Floorplan.css";
import Floor1 from "../../assets/floor1.png";
import Floor2 from "../../assets/floor2.png";
import Floor3 from "../../assets/floor3.png";
import Floor4 from "../../assets/floor4.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Floorplan = () => {
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
    <div className='floorplanpage_con'>
        <Nav />
        <div className='floorplanpage'>
            <div className='floorplanpage_detail'>
                <div className='floorplanpage_title'>{t("floorplanpage_title1")}</div>
            </div>
            <div className='floor'>
                    <img src={Floor1} className='picfloor' alt='floor1' />
            </div>

            <div className='floorplanpage_detail'>
                <div className='floorplanpage_title'>{t("floorplanpage_title2")}</div>
            </div>
            <div className='floor'>
                    <img src={Floor2} className='picfloor' alt='floor2' />
            </div>

            <div className='floorplanpage_detail'>
                <div className='floorplanpage_title'>{t("floorplanpage_title3")}</div>
            </div>
            <div className='floor'>
                    <img src={Floor3} className='picfloor' alt='floor3' />
            </div>
            
            <div className='floorplanpage_detail'>
                <div className='floorplanpage_title'>{t("floorplanpage_title4")}</div>
            </div>
            <div className='floor'>
                    <img src={Floor4} className='picfloor' alt='floor4' />
            </div>
        </div>
    </div>
  )
}

export default Floorplan