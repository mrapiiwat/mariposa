import Nav from "../../component/Nav/Nav";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-con">
      <Nav />
      <main className="homePage-main-content">
        <div className="bulr-back"></div>
        <div className="home-content">
          <h1 className="home-h1">หอสมุด<br />หมาวิยาลัยเมริโพซ่า</h1>
          <button className="home-login-btn">เข้าสู่ระบบ</button>
        </div>

      </main>
    </div>
  );
};

export default HomePage;
