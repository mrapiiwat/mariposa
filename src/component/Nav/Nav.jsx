import "./nav.css";
import { Link } from "react-router-dom";
import mainlogo from "../../assets/libarylogo.png";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo-con">
          <Link to="/">
            <img className="main-logo" src={mainlogo} alt="main logo" />
          </Link>
        </div>
        <div className="menu-con">
          <ul>
            <li>
              <Link className="menu-a" to="about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link className="menu-a" to="service">
                บริการ
              </Link>
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

export default Nav;
