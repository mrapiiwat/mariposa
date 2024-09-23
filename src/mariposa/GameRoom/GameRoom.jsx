import NavLogin from "../../component/Nav/NavLogin";
import "./GameRoom.css";
import GameRoomImg from "../../assets/gameroom.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const GameRoom = () => {
  const [date, setDate] = useState("");
  const { t } = useTranslation();
  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const dateString = now.toLocaleDateString("th-Th", options);
      setDate(dateString);
    };
    updateDate();
    const intervalId = setInterval(updateDate, 1000 * 60 * 60);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="game-con">
      <NavLogin />
      
    </div>
  );
};
export default GameRoom;
