import Nav from "../../component/Nav/Nav";
import "./AboutPage.css";
import logo2 from "../../assets/mariposalogo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [member, setMember] = useState([
    {
      fullName: "นายอิภิวัฒน์ ลานทอง",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวนฤมล สีละมุด",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวสุขหทัย พลยะเรศ",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวเดือนเพ็ญ โฉมฉาย",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นางสาวปิยธิดา อันชม",
      duty: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam iste modi atque distinctio commodi ducimus.",
      imgSm: "https://via.placeholder.com/200",
      imgLg: "https://via.placeholder.com/350",
    },
    {
      fullName: "นายภูมิพัฒน์ เวฬุฬวรรณราช",
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
            หอสมุด
            <br />
            หมาวิยาลัยเมริโพซ่า
          </h2>
        </div>
        <div className="aboutPage-content-con">
          <p className="aboutPage-text">
            หอสมุดหมาวิทยาลัยแมริโพซ่าเป็นโปรเจกต์ <br /> ของรายวิชา CE 385
            การออกแบบสถาปัตยกรรมแอปพลิเคชั่น <br /> จัดทําโดยคณะผู้จัดทํา
            นักศึกษาชั้นปีที่ 3 วิทยาลัยนวัตกรรมด้านเทคโนโลยีและวิศวกรรมศาสตร์{" "}
            <br /> สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยธุรกิจบัณฑิต
          </p>
        </div>
      </div>
      <div className="memmer-con">
        <h4 className="h4-about">คณะผู้จัดทํา</h4>
        <div className="member">
          {member.map((member, index) => {
            return (
              <div className="member-card" key={index}>
                <Link to={"/member"} state={{ member }}>
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
