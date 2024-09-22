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
      <div className="gr">
        <div className="gameroomheader">
          <img className="gamepic" src={GameRoomImg} alt="" />
          <div className="blurgamepic"></div>
          <div className="gameroomname">Game Room</div>
        </div>
        <div className="gameroom-main-content">
          <div className="gameroomdate">{date}</div>
          <div className="gameroom-rules-con">
            <h2 className="rules-title">ข้อปฏิบัติในการใช้บริการ</h2>
            <div className="gameroom-rules">
              <div className="rules-1">
                1. จำนวนผู้ใช้บริการ ไม่น้อยกว่า 3 คน{" "}
              </div>
              <div className="rules-2">
                2. ใช้บริการห้องได้ครั้งละ 2 ชั่วโมง มาช้าเกิน 15 นาที
                ถือว่าท่านสละสิทธิ์{" "}
              </div>
              <div className="rules-3">
                3. ติดต่อที่เคาน์เตอร์ เมื่อถึงเวลาใช้บริการ
                และใช้บริการแล้วเสร็จ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameRoom;
