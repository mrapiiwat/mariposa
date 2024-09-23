import "./RoomBackground.css";
import { useState, useEffect } from "react";

const RoomBackground = ({imgOfroom,nameofroom}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const day = currentDate.toLocaleString("default", { weekday: "long" });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="room-background-con">
      <div className="room-background-img-con">
        <img className="room-background-img" src={imgOfroom} alt="room background" />
        <div className="room-background-text-con">
          <h1 className="room-background-text">{nameofroom}</h1>
        </div>
        <div className="blur-roombackground"></div>
      </div>
      <div className="room-date-con">
        <div className="room-date-now">
          <h2>
            {day} {date} {month} {year}
          </h2>
        </div>
      </div>
      <div className="rules-con">
        <div className="rules-title">
          ข้อปฎิบัติในการใช้งาน
        </div>
          <ol className="rules-1-3">
            <li className="rules-1"> จํานวนผู้ใช้บริการ ไม่น้อยกว่า 3 คน</li>
            <li className="rules-1"> ใช้บริการได้ครั้งละ 2 ชั่วโมง มาช้ากว่า 15 นาที ถือว่าท่านสละสิทธ์</li>
            <li className="rules-1"> ติดต่อที่เคาน์เตอร์ เมื่อถึงเวลาใช้บริการ เเล้วใช้บริการเสร็จเเล้ว</li>
          </ol>
      </div>
      <div className="roombackground-emty">
        <div className="roomback-open">
          เวลาทำการ: วันจันทร์-วันศุกร์  08.00 -18.00 น. / วันเสาร์-วันอาทิตย์ 8:30-18.00น
        </div>
        <div className="empy-box-room-con">
          <div className="empy-box-room"></div>
        </div>
      </div>
      <div className="roomback-time">
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
        <div className="room-time-back"><span className="front-time">8:00</span><span>-</span><span className="end-time">8:30</span></div>
      </div>
    </div>
  );
};

export default RoomBackground;
