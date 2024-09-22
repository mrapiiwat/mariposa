import "./NavLogin.css";
import { Link } from "react-router-dom";
import userPic from "../../assets/user.png";
import mainlogo from "../../assets/libarylogo.png";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import Loader from "../Loader/Loader";

const NavLogin = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([
    {
      name: "Guest",
      img: userPic,
    },
  ]);

  return (
    
    <div className="nav-log-con">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <nav>
          <div className="logo-con">
            <Link to="/">
              <img className="main-logo" src={mainlogo} alt="main logo" />
            </Link>
          </div>
          <div className="menu-con">
            <ul className="ul-nav-log">
              <li className="li-nav-log">
                <img className="userPic" src={user[0].img} alt="" />
                <div className="user-con">
                  <p className="p-name">{user[0].name}</p>
                  <MdOutlineExpandMore className="expand" />
                </div>
              </li>
            </ul>
            <div className="lang-con">
              <Link
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1500);
                }}
                className="lang-a"
                to=""
              >
                ไทย
              </Link>
              <Link
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                  }, 1500);
                }}
                className="lang-a"
                to=""
              >
                ENG
              </Link>
              <span className="just-span">|</span>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavLogin;
