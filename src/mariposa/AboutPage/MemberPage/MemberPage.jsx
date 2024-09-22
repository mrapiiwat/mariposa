import Nav from "../../../component/Nav/Nav";
import "./MemberPage.css";
import { useLocation } from "react-router-dom";

const MemberPage = () => {
  const location = useLocation();
  const { member } = location.state || {};
  return (
    <div className="memberPage-con">
      <Nav />
      <div className="meminfo-con">
        <div className="member-bruh">
          <div className="memberPage-img">
            <img
              className="mem-pic"
              src={member.imgLg}
              alt={`imgOf ${member.fullName}`}
            />
          </div>
          <div className="member-detail-con">
            <h1 className="main-name">{member.Name}<br />{member.LastName}</h1>
            <h5 className="main-info-name">คณะผู้จัดทํา {member.fullName}</h5>
            <p className="main-info-duty">
              <strong>มีหน้าที่ :</strong> {member.duty}
            </p>
          </div>
        </div>
        <div className="backto-about-btn-con">
          <button
            onClick={() => {
              window.history.back();
            }}
            className="backto-about-btn"
          >
            กลับสู่หน้าเกี่ยวกับเรา
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
