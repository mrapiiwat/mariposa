import NavLogin from "../../component/Nav/NavLogin";
import "./booking.css"
import { useState, useEffect } from 'react';

const Booking = () => {
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
    
    <body>
      <NavLogin/>
      <div className = "mm1">
      <h1>{date}</h1>
      </div>
    
    </body>

  )
}

export default Booking