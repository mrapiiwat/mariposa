import "./RoomBackground.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const RoomBackground = ({ imgOfroom, nameofroom }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { t } = useTranslation();

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
        <img
          className="room-background-img"
          src={imgOfroom}
          alt="room background"
        />
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
        <div className="rules-title">{t("gameroom-title-1")}</div>
        <ol className="rules-1-3">
          <li className="rules-1"> {t("gameroom-rules-1")}</li>
          <li className="rules-1"> {t("gameroom-rules-2")} </li>
          <li className="rules-1"> {t("gameroom-rules-3")}</li>
        </ol>
      </div>
      <div className="roombackground-emty">
        <div className="roomback-open">{t("gameroom-opening")}</div>
        <div className="empy-box-room-con">
          <div className="empy-box-room"></div>
        </div>
      </div>
      <div className="roomback-time">
        <div className="room-time-back">
          <span className="front-time">8:00</span>
          <span>-</span>
          <span className="end-time">8:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">8:30</span>
          <span>-</span>
          <span className="end-time">9:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">9:00</span>
          <span>-</span>
          <span className="end-time">9:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">9:30</span>
          <span>-</span>
          <span className="end-time">10:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">10:00</span>
          <span>-</span>
          <span className="end-time">10:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">10:30</span>
          <span>-</span>
          <span className="end-time">11:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">11:00</span>
          <span>-</span>
          <span className="end-time">11:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">11:30</span>
          <span>-</span>
          <span className="end-time">12:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">12:00</span>
          <span>-</span>
          <span className="end-time">12:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">12:30</span>
          <span>-</span>
          <span className="end-time">13:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">13:00</span>
          <span>-</span>
          <span className="end-time">13:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">13:30</span>
          <span>-</span>
          <span className="end-time">14:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">14:00</span>
          <span>-</span>
          <span className="end-time">14:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">14:30</span>
          <span>-</span>
          <span className="end-time">15:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">15:00</span>
          <span>-</span>
          <span className="end-time">15:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">15:30</span>
          <span>-</span>
          <span className="end-time">16:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">16:00</span>
          <span>-</span>
          <span className="end-time">16:30</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">16:30</span>
          <span>-</span>
          <span className="end-time">17:00</span>
        </div>
        <div className="room-time-back">
          <span className="front-time">17:30</span>
          <span>-</span>
          <span className="end-time">18:00</span>
        </div>
      </div>
    </div>
  );
};

export default RoomBackground;
