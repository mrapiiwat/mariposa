import Nav from "../../component/Nav/Nav";
import "./ServicePage.css";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <div className="servicepage-con">
      <Nav />
      <div className="servicepage">

{/* Service Detail. Tell more about service and fees in libary. */}
        <div className="service_detail">
          <div className="service_detail_left">
            <div className="left_title">เปิดให้บริการทั้งนักศึกษาและบุคคลภายนอก</div>
            <div className="left_detail">หอสมุดมหาวิทยาลัยแมริโพซ่าเปิดให้บุคคลภายนอกสามารถเข้ามาใช้บริการได้ตลอดเวลาที่เปิดให้บริการ เสียค่าบริการครั้งละ 20 บาท</div>
            <div className="left_servicedetail">
              โดยเว็บไซต์หอสมุดมหาวิทยาลัยแมริโพซ่าให้บริการ
              <ul>
                <li>จองห้องประชุม (บุคคลภายนอกคิดค่าบริการ)</li>
                <li>จองห้องโรงภาพยนต์ ห้องเกม (สงวนสิทธิ์แก่นักศึกษาเท่านั้น)</li>
              </ul>
            </div>
            <div className="left_golink">
              <Link>คลิกเพื่อดูอัตราค่าบริการสำหรับบุคคลภายนอก</Link>
            </div>
          </div>

          <div className="service_detail_right">
            <div className="right_title">เวลาเปิดให้บริการ</div>

              <div className="right_week">
                <div classname='right_day'>จันทร์ - ศุกร์</div>
                <div classname='right_time'>เวลา 8:30 -18:00</div>
              </div>

              <div className="right_weekend">
                <div classname='right_day'>เสาร์ - อาทิตย์</div>
                <div classname='right_time'>เวลา 9:00 -18:00</div>
              </div>

              <div className="right_holiday">
                <div classname='right_day'>วันหยุดราชการ</div>
                <div classname='right_time'>ปิดให้บริการ</div>
                <div classname='right_note'>หมายเหตุ: เวลาทำการอาจปรับเปลี่ยนได้ตามความเหมาะสม</div>
              </div>
          </div>
        </div>

{/* Floorplan. Show what libary looks like */}
        <div className="service_floorplan">
          <div className="floorplan_title">มากกว่าห้องสมุด... คือพื้นที่ Co-Working Space สุดชิค</div>
          <div className="floorplan_detail">
            เน้นการบริการในรูปแบบใหม่ที่เป็นมากกว่าห้องสมุด
            <ul>
              <li>ชั้น 1: ห้องสมุดหลักบรรยากาศเงียบสงบ </li>
              <li>ชั้น 2: พื้นที่ Co-working Space </li>
              <li>ชั้น 3: ห้องประชุมขนาดต่างๆ</li>
              <li>ชั้น 4: โรงภาพยนตร์ขนาดเล็ก ห้องเกม และพื้นที่พักผ่อน (สงวนสิทธิ์แก่นักศึกษาเท่านั้น)</li>
            </ul>
          </div>
          <div className="floorplan_golink">
              <Link>คลิกเพื่อดูรายละเอียดแผนผังหอสมุด</Link>
          </div>
          <div className="floorplan_img">
            <img src="src\assets\libarybuilding.jpg" alt="libary building" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default ServicePage;
