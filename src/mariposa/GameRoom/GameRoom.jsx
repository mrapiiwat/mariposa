import React from "react";
import NavLogin from "../../component/Nav/NavLogin";
import "./GameRoom.css";
import GameRoomImg from "../../assets/gameroom.jpg";

const GameRoom = () => {
  return (
    <div className="game-room-con">
      <NavLogin />
      <div className="gr">
        <div className="gameroomheader">
          <img className="gamepic" src={GameRoomImg} alt="" />
          <div className="blurgamepic"></div>
          <div className="gameroomname">ห้องเล่นเกม</div>
        </div>
      </div>
    </div>
  );
};

export default GameRoom;
