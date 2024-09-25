import React from "react";
import Nav from "../../component/Nav/Nav";
import "./Servicefee.css";

const Servicefee = () => {
  return (
    <div className="servicefee_con">
      <Nav />
      <div className="servicefee">
        <div className="servicefee_detail">
          <div className="servicefee_title">
            อัตราค่าบริการสำหรับบุคคลภายนอก
          </div>
          <div className="servicefee_doc">
            <div className="servicefee_divst">
              <div className="abcd">
                <div>จองห้องประชุมขนาดเล็ก</div>
                <div>ครึ่งชั่วโมง 20 บาท</div>
              </div>
              <div className="abcd">
                <div>จองห้องประชุมขนาดกลาง </div>
                <div>ครึ่งชั่วโมง 30 บาท</div>
              </div>
              <div className="abcd">
                <div>จองห้องประชุมขนาดใหญ่ </div>
                <div>ครึ่งชั่วโมง 50 บาท</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicefee;
