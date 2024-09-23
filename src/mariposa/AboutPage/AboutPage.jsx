import Nav from "../../component/Nav/Nav";
import "./AboutPage.css";
import logo2 from "../../assets/mariposalogo2.png";
import { useState } from "react";
import { Link ,useParams} from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); // ดึงค่าภาษาออกจาก URL
  const [member, setMember] = useState([
    
    {
      fullName: `นายอภิวัฒน์ ลานทอง`,
      Name:`นายอภิวัฒน์`,
      LastName:`ลานทอง`,
      duty: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.`,
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวนฤมล สีละมุด",
      Name:"นางสาวนฤมล",
      LastName:"สีละมุด",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวสุขหทัย พลยะเรศ",
      Name:"นางสาวสุขหทัย",
      LastName:"พลยะเรศ",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวเดือนเพ็ญ โฉมฉาย",
      Name:"นางสาวเดือนเพ็ญ",
      LastName:"โฉมฉาย",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวปิยธิดา อันชม",
      Name:"นางสาวปิยธิดา",
      LastName:"อันชม",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นายภูมิพัฒน์ เวฬุฬวรรณราช",
      Name:"นายภูมิพัฒน์",
      LastName:"เวฬุฬวรรณราช",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
  ]);

  return (
    <div className="about-page-con">
      <Nav />
      <div className="about-con">
        <div className="aboutPage-logo-con">
          <img className="about-page-logo" src={logo2} />
        </div>
        <div className="about-uni-name">
          <h2 className="name-uni-aboutPage">
            {t("Library")}
            <br />
            {t("mariposaU")}
          </h2>
        </div>
        <div className="aboutPage-content-con">
          <p className="aboutPage-text">
            {t('aboutpage-text-1')} <br /> {t('aboutpage-text-2')} <br /> {t('aboutpage-text-3')}
            <br /> {t('aboutpage-text-4')}
          </p>
        </div>
      </div>
      <div className="memmer-con">
        <h4 className="h4-about">{t('aboutpage-production-team')}</h4>
        <div className="member">
          {member.map((member, index) => {
            return (
              <div className="member-card" key={index}>
                <Link to={`/${lang}/about/member`} state={{ member }}>
                  <img
                    className="member-about-img"
                    src={member.imgSm}
                    alt={member.fullName}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
