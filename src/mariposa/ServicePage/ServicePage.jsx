import Nav from "../../component/Nav/Nav";
import "./ServicePage.css";
import libaryImage from "../../assets/libarybuilding.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const { t } = useTranslation();
  return (
    <div className="servicepage-con">
      <Nav />
    <div className="servicepage">


{/* Service Detail. Tell more about service and fees in libary. */}
        <div className="service_detail">
          <div className="service_detail_left">
            <div className="left_title">{t('left_title')}</div>
            <div className="left_detail">{t('left_detail')}</div>
            <div className="left_servicedetail">
              { t('left_servicedetail')}
              <ul>
                <li className="left_li1">{ t('left_li1')}</li>
                <li className="left_li2">{ t('left_li2')}</li>
              </ul>
            </div>
            <div className="left_golink">
              <Link to={"servicefee"}>คลิกเพื่อดูอัตราค่าบริการสำหรับบุคคลภายนอก</Link>
            </div>
          </div>

          <div className="service_detail_right">
            <div className="right_title">เวลาเปิดให้บริการ</div>

              <div className="right_week">
                <div classname='right_day1'>จันทร์ - ศุกร์</div>
                <div classname='right_time1'>เวลา 8:30 -18:00</div>
              </div>

              <div className="right_weekend">
                <div classname='right_day2'>เสาร์ - อาทิตย์</div>
                <div classname='right_time2'>เวลา 9:00 -18:00</div>
              </div>

              <div className="right_holiday">
                <div classname='right_day3'>วันหยุดราชการ</div>
                <div classname='right_time3'>ปิดให้บริการ</div>
                <div classname='right_note'>หมายเหตุ: เวลาทำการอาจปรับเปลี่ยนได้ตามความเหมาะสม</div>
              </div>
          </div>
        </div>


{/* Floorplan. Show what libary looks like */}
        <div className="service_floorplan">
          <div className="service_floorplan_left">
            <div className="floorplan_title">มากกว่าห้องสมุด... คือพื้นที่ <br></br>Co-Working Space สุดชิค</div>
            <div className="floorplan_detail">
              เน้นการบริการในรูปแบบใหม่ที่เป็นมากกว่าห้องสมุด
              <ul>
                <li className="floorplan_li1">ชั้น 1: ห้องสมุดหลักบรรยากาศเงียบสงบ</li>
                <li className="floorplan_li2">ชั้น 2: พื้นที่ Co-working Space</li>
                <li className="floorplan_li3">ชั้น 3: ห้องประชุมขนาดต่างๆ</li>
                <li className="floorplan_li4">ชั้น 4: โรงภาพยนตร์ขนาดเล็ก ห้องเกม และพื้นที่พักผ่อน (สงวนสิทธิ์แก่นักศึกษาเท่านั้น)</li>
              </ul>
            </div>
            <div className="floorplan_golink">
                <Link to={"floorplan"}>คลิกเพื่อดูรายละเอียดแผนผังหอสมุด</Link>
            </div>
          </div>
          <div className="service_floorplan_right">
            <div className="floorplan_img">
              <img src={libaryImage} alt="libary building" /> 
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ServicePage;
