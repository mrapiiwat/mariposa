import { useState } from "react";
import Nav from "../../component/Nav/Nav";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="Login-Page-con">
      <Nav />
      <div className="login-page">
        <div className="login-box-con">
          <div className="blur-login-backgound"></div>
          <div className="login-box">
            <div className="userinput-con">
              <label>ชื่อผู้ใช้งาน หรือ อีเมล</label>
              <input type= "text" />
            </div>

            <div className="passwordinput-con">
              <label>รหัสผ่าน</label>
              <input type= "password" />
            </div>
            <div className="login-btn-con">
              <button className="log-btn">เข้าสู่ระบบ</button> 
              <Link className="nolog-btn">ยังไม่ได้เป็นสมาชิก?</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
