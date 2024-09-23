import Nav from "../../component/Nav/Nav";
import "./HomePage.css";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
  return (
    <div className="home-page-con">
      <Nav />
      <main className="homePage-main-content">
        <div className="bulr-back"></div>
        <div className="home-content">
          <h1 className="home-h1">
            {t('Library')}
            <br />
            {t('mariposaU')}
          </h1>
          <button className="home-login-btn">{t('Log-in')}</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
