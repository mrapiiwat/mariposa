import "./NavLogin.css";
import { Link } from "react-router-dom";
import userPic from "../../assets/user.png";
import mainlogo from "../../assets/libarylogo.png";
import { MdOutlineExpandMore } from "react-icons/md";

const NavLogin = () => {
  return (
    <>
      <nav>
        <div className="logo-con">
          <Link to="/">
            <img className="main-logo" src={mainlogo} alt="main logo" />
          </Link>
        </div>
        <div className="menu-con">
          <ul className="ul-nav-log">
            <li className="li-nav-log">
              <img className="userPic" src={userPic} alt="" />
              <p className="p-name">Apiwat</p>
              <MdOutlineExpandMore className="expand" />
            </li>
          </ul>
          <div className="lang-con">
            <Link className="lang-a" to="">
              ไทย
            </Link>
            <Link className="lang-a" to="">
              ENG
            </Link>
            <span className="just-span">|</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavLogin;
