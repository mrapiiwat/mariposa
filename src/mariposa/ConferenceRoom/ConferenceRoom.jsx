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
      <RoomBackground
        imgOfroom={backgroung}
        nameofroom={t("conference-title")} // ดึงข้อความแปล
      />

      <div className="t1">
        <div className="conference-booking-detail-con">
          <div className="conference-booking-detail">ห้อง 1(6คน)</div>
          <div className="conference-booking-detail">ห้อง 2(6คน)</div>
          <div className="conference-booking-detail">ห้อง 3(6คน)</div>
          <div className="conference-booking-detail">ห้อง 4(12คน)</div>
          <div className="conference-booking-detail">ห้อง 5(12คน)</div>
          <div className="conference-booking-detail">ห้อง 6(12คน)</div>
          <div className="conference-booking-detail">ห้อง 7(22คน)</div>
        </div>

        <div className="conference-booking-table-detail">
          {conferenceCheckbox.map((isChecked, index) => (
            <div className="conference-checkbox" key={index}>
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
          <button onClick={handleButtonClick} className="conference-btn">
            {t("gameroom-btn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceRoom;
