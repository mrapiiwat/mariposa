import React from "react";
import "./SingUp.css";
import Nav from "../../component/Nav/Nav";

const SingUp = () => {
  return (
    <div className="sing-up-page-con">
      <Nav />
      <div className="sing-up-page">
        <div className="blursingup"></div>
        <div className="box-singup">
          <div className="sing-up-top">
            <div className="sing-up-left">
              <div className="sing-up-left-top">
                <label>อีเมล</label>
                <input type="email" />
              </div>
              <div className="sing-up-left-bot">
                <label>ชื่อผู้ใช้งาน</label>
                <input type="text" />
              </div>
            </div>
            <div className="sing-up-right">
              <div className="sing-up-right-top">
                <label>รหัสผ่าน</label>
                <input type="password" />
              </div>
              <div className="sing-up-right-bot">
                <label>ยืนยันรหัสผ่านอีกครั้ง</label>
                <input type="password" />
              </div>
            </div>
          </div>
          <div className="sing-up-but">
            <button className="sing-up-btn">สมัคร</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
