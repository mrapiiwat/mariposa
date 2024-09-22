import "./Loader.css";
import PulseLoader from "react-spinners/PulseLoader";
import Logo from "../../assets/mariposalogo1.png";

const Loader = ({ loading }) => {
  return (
    <div className="load-con">
      <img className="Load-logo" src={Logo} alt="" />
      <PulseLoader
        className="loader"
        loading={loading}
        size={5}
        color="#00408c"
      />
    </div>
  );
};

export default Loader;
