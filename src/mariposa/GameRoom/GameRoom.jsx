import NavLogin from "../../component/Nav/NavLogin";
import "./GameRoom.css";
import GameRoomImg from "../../assets/gameroom.jpg";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import RoomBackground from "../../component/RoomBackground/RoomBackground";

const GameRoom = () => {
  const {t} = useTranslation();
  const [gamroomCheckbox,setGamroomCheckbox] = useState(Array(133).fill(false))
  return (

    <div className="game-con">
      <NavLogin />
      <RoomBackground imgOfroom={GameRoomImg} nameofroom={t('gameroom-title')}/>
      <div className="table-booking">
        <div className="gameroom-booking-detail-con">
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail1')}</div>
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail2')}</div>
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail3')}</div>
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail4')}</div>
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail5')}</div>
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail6')}</div>
          <div className="gameroom-booking-detail">{t('gameroom-booking-detail7')}</div>

        </div>
          
        <div className="gameroom-booking-table-detail">
          {gamroomCheckbox.map((isChecked,index)=>(
            <div className="gameroom-checkbox">
              <label className="gameroom-lable" key={index}><input className="gameroom-select" type="checkbox" checked = {isChecked} /></label>

            </div>

          ))}
          <button className="gameroom-btn">{t('gameroom-btn')}</button>
        </div>

      </div>
    </div>
);
};
export default GameRoom;
