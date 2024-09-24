import NavLogin from "../../component/Nav/NavLogin";
import RoomBackground from "../../component/RoomBackground/RoomBackground";
import "./ConferenceRoom.css";
import backgroung from "../../assets/conferenceroom.jpg";
import { useTranslation } from "react-i18next"; // ใช้ useTranslation แทน useTransition
import { useState } from "react";

const ConferenceRoom = () => {
  const { t } = useTranslation(); // ใช้ useTranslation
  const [conferenceCheckbox, setConferenceCheckbox] = useState(
    Array(133).fill(false)
  );
  const ROW_SIZE = 19;

  const timeSlots = [
    "8:00 - 8:30",
    "8:30 - 9:00",
    "9:00 - 9:30",
    "9:30 - 10:00",
    "10:00 - 10:30",
    "10.30 - 11.00",
    "11.00 - 11.30",
    "11.30 - 12.00",
    "12.00 - 12.30",
    "12.30 - 13.00",
    "13.00 - 13.30",
    "13.30 - 14.00",
    "14.00 - 14.30",
    "14.30 - 15.00",
    "15.00 - 15.30",
    "15.30 - 16.00",
    "16.00 - 16.30",
    "16.30 - 17.00",
    "17.00 - 17.30",
    "17.30 - 18.00",
  ];

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...conferenceCheckbox];

    const currentRow = Math.floor(index / ROW_SIZE);

    const isDifferentRow = updatedCheckboxes.some(
      (isChecked, i) => isChecked && Math.floor(i / ROW_SIZE) !== currentRow
    );

    if (isDifferentRow) {
      updatedCheckboxes.fill(false);
    }

    const selectedCount = updatedCheckboxes.filter(Boolean).length;

    const checkAdjacent = (arr, rowStart, rowEnd) => {
      let maxStreak = 0;
      let currentStreak = 0;

      for (let i = rowStart; i <= rowEnd; i++) {
        if (arr[i]) {
          currentStreak++;
        } else {
          maxStreak = Math.max(maxStreak, currentStreak);
          currentStreak = 0;
        }
      }
      maxStreak = Math.max(maxStreak, currentStreak);
      return maxStreak;
    };

    if (!updatedCheckboxes[index] && selectedCount >= 4) {
      return;
    }

    updatedCheckboxes[index] = !updatedCheckboxes[index];
    const rowStart = currentRow * ROW_SIZE;
    const rowEnd = rowStart + ROW_SIZE - 1;
    const adjacentCount = checkAdjacent(updatedCheckboxes, rowStart, rowEnd);

    if (adjacentCount > 4) {
      return;
    }

    setConferenceCheckbox(updatedCheckboxes);
  };

  const handleButtonClick = () => {
    const selectedSlots = conferenceCheckbox
      .map((isChecked, index) => {
        if (isChecked) {
          const rowNumber = Math.floor(index / ROW_SIZE) + 1;
          const timeSlot = timeSlots[index % ROW_SIZE];
          return `Row ${rowNumber}, Time: ${timeSlot}`;
        }
        return null;
      })
      .filter(Boolean);

    console.log("Selected slots:", selectedSlots);
  };

  return (
    <div className="confer-room-con">
      <NavLogin />
      <RoomBackground imgOfroom={backgroung} nameofroom={t("conroom-title")} />
      <div className="t1">
        <div className="conference-booking-detail-con">
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail1")}
          </div>
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail2")}
          </div>
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail3")}
          </div>
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail4")}
          </div>
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail5")}
          </div>
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail6")}
          </div>
          <div className="conference-booking-detail">
            {t("gameroom-booking-detail7")}
          </div>
        </div>
        <div className="conroom-booking-table-detail-con">
          <div className="conference-booking-table-detail">
            {conferenceCheckbox.map((isChecked, index) => (
              <div key={index} className="conference-checkbox">
                <label className="conference-label" key={index}>
                  <input
                    className="conference-select"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="conroom-btn-con">
            <button onClick={handleButtonClick} className="conroom-btn">
              {t("gameroom-btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceRoom;
