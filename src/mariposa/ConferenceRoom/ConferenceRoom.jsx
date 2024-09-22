import NavLogin from "../../component/Nav/NavLogin";
import "./ConferenceRoom.css"
import ConferenceRoomImg from "../../assets/conferenceroom.jpg"
import { useState, useEffect } from 'react';

const ConferenceRoom = () => {
    const [date, setDate] = useState('');

  useEffect(() => {
      const updateDate = () => {
          const now = new Date();
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const dateString = now.toLocaleDateString('th-TH', options); 
          setDate(dateString);
      };

      updateDate(); 
      const intervalId = setInterval(updateDate, 1000 * 60 * 60); 

      return () => clearInterval(intervalId); 
  }, []);
return (
    
    <div className="confer-room-con">
        <NavLogin/>
        <div className="cfr">
            <div className="conferenceheader">
                <img className="conferencepic" src={ConferenceRoomImg} alt="" />
                <div className="blurconferencepic"></div>
                <div className="conferencename">ห้องประชุม</div>
            </div>
            <div className="conference-main-content">
                <div className="conferencedate">{date}</div>
                <div className="conference-rules-con">
                    <h2 className="rules_title">ข้อปฎิบัติในการใช้บริการ</h2>
                    <div className="conference-rules">
                        <div className="rules_1">
                            1. จำนวนผู้ใช้บริการ ไม่น้อย กว่า 3 คน {" "}
                        </div>
                        <div className="rules_2">
                            2. ใช้บริการห้องได้ครั้งละ 2 ชั่วโมง มาช้าเกิน15 นาที
                            ถือว่าสละสิทธิ์{" "}
                        </div>
                        <div className="rules_3">
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

export default  ConferenceRoom;