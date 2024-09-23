import React from "react";
import NavLogin from "../../component/Nav/NavLogin";
import "./GameRoom.css";
import { useTranslation } from "react-i18next";
import RoomBackground from "../../component/RoomBackground/RoomBackground";

const GameRoom = () => {
  const {t} = useTranslation();
  return (
    <div className="game-con">
      <NavLogin />
      <RoomBackground />
    </div>
  );
};

export default GameRoom;
