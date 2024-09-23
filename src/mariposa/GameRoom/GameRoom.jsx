import React from "react";
import NavLogin from "../../component/Nav/NavLogin";
import "./GameRoom.css";
import GameRoomImg from "../../assets/gameroom.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import RoomBackground from "../../component/RoomBackground/RoomBackground";

const GameRoom = () => {
  const {t} = useTranslation();
  return (

    <div className="game-con">
      <NavLogin />
      <RoomBackground imgOfroom={GameRoomImg} nameofroom={t('gameroom-title')}/>
    </div>
);
};
export default GameRoom;
