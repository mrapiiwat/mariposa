import React from "react";
import NavLogin from "../../component/Nav/NavLogin";
import "./CinemaRoom.css";
import CinemaRoomImg from "../../assets/cinemaroom.jpg";
import { useState, useEffect } from "react";
import RoomBackground from "../../component/RoomBackground/RoomBackground";
import { useTranslation } from "react-i18next";

const CinemaRoom = () => {
  const { t } = useTranslation();
  const [cinemaroomCheckbox, setCinemaroomCheckbox] = useState(
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
    // ... เพิ่มข้อมูลตามต้องการสำหรับแต่ละช่อง
  ];

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...cinemaroomCheckbox];

    // คำนวณบรรทัดที่ checkbox นี้อยู่
    const currentRow = Math.floor(index / ROW_SIZE);

    // ตรวจสอบว่าผู้ใช้เลือก checkbox ในบรรทัดเดียวกันหรือไม่
    const isDifferentRow = updatedCheckboxes.some(
      (isChecked, i) => isChecked && Math.floor(i / ROW_SIZE) !== currentRow
    );

    // ถ้ามีการเลือก checkbox ในบรรทัดอื่น รีเซ็ตสถานะ checkbox ทั้งหมดก่อน
    if (isDifferentRow) {
      updatedCheckboxes.fill(false);
    }

    // ตรวจสอบว่ามี checkbox ที่ถูกเลือกอยู่แล้วกี่ช่อง
    const selectedCount = updatedCheckboxes.filter(Boolean).length;

    // ตรวจสอบว่ามีการเลือก checkbox ต่อเนื่องกันหรือไม่
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
      maxStreak = Math.max(maxStreak, currentStreak); // Update for last streak
      return maxStreak;
    };

    // อนุญาตให้เลือกช่องได้หากยังไม่เกิน 4 ช่องติดกัน
    if (!updatedCheckboxes[index] && selectedCount >= 4) {
      return;
    }

    // อนุญาตให้เลือกต่อเนื่องกันไม่เกิน 4 ช่องในบรรทัดเดียวกัน
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    const rowStart = currentRow * ROW_SIZE;
    const rowEnd = rowStart + ROW_SIZE - 1;
    const adjacentCount = checkAdjacent(updatedCheckboxes, rowStart, rowEnd);

    if (adjacentCount > 4) {
      return;
    }

    setCinemaroomCheckbox(updatedCheckboxes);
  };

  // ฟังก์ชันเพื่อดึงข้อมูลช่องที่ถูกเลือก
  const handleButtonClick = () => {
    const selectedSlots = cinemaroomCheckbox
      .map((isChecked, index) => {
        if (isChecked) {
          const rowNumber = Math.floor(index / ROW_SIZE) + 1;
          const timeSlot = timeSlots[index % ROW_SIZE];
          return `Row ${rowNumber}, Time: ${timeSlot}`;
        }
        return null;
      })
      .filter(Boolean); // กรองเฉพาะค่าที่ถูกเลือก

    console.log("Selected slots:", selectedSlots);
  };
  return (
    <div className="cinema-room-con">
      <NavLogin />
      <RoomBackground imgOfroom={CinemaRoomImg} nameofroom={t("cinema-title")} />

      <div className="table-booking">
        <div className="cinemaroom-booking-detail-con">
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail1")}
          </div>
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail2")}
          </div>
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail3")}
          </div>
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail4")}
          </div>
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail5")}
          </div>
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail6")}
          </div>
          <div className="cinemaroom-booking-detail">
            {t("cinemaroom-booking-detail7")}
          </div>
        </div>
        <div className="cinemaroom-booking-table-detail-con">
          <div className="cinemaroom-booking-table-detail">
            {cinemaroomCheckbox.map((isChecked, index) => (
              <div key={index} className="cinemaroom-checkbox">
                <label className="cinemaroom-lable" key={index}>
                  <input
                    className="cinemaroom-select"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="cinemaroom-btn-con">
            <button onClick={handleButtonClick} className="cinemaroom-btn">
              {t("cinemaroom-btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaRoom
