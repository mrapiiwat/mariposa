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
        
    </div>
);
};

export default  ConferenceRoom;