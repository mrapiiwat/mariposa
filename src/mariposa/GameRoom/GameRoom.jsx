
import NavLogin from "../../component/Nav/NavLogin";
import "./GameRoom.css";
import { useTranslation } from "react-i18next";

const GameRoom = () => {
  const {t} = useTranslation();
  return (
    <div className="game-con">
      <NavLogin />
      <section className="game-room-con">
        <h1>Cream</h1>
        <p>{t('About')}</p>
      </section>
    </div>
  );
};

export default GameRoom;
