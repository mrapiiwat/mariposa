import React from 'react'
import Nav from "../../component/Nav/Nav";
import "./Floorplan.css";
import Floor1 from "../../assets/floor1.png";
import Floor2 from "../../assets/floor2.png";
import Floor3 from "../../assets/floor3.png";
import Floor4 from "../../assets/floor4.png";

const Floorplan = () => {
  return (
    <div className='servicefee_con'>
        <Nav />
        <div className='servicefee'>
            <div className='servicefee_detailabc'>
                <div className='servicefee_title'>ชั้น 1: <br></br> ห้องสมุดหลักบรรยากาศเงียบสงบ</div>
            </div>
            <div className='floor1'>
                    <img src={Floor1} className='picfloor1' alt='floor1' />
            </div>

            <div className='servicefee_detailabc'>
                <div className='servicefee_title'>ชั้น 2: <br></br> พื้นที่ Co-working Space</div>
            </div>
            <div className='floor1'>
                    <img src={Floor2} className='picfloor1' alt='floor1' />
            </div>

            <div className='servicefee_detailabc'>
                <div className='servicefee_title'>ชั้น 3: <br></br> ห้องประชุมขนาดต่างๆ</div>
            </div>
            <div className='floor1'>
                    <img src={Floor3} className='picfloor1' alt='floor1' />
            </div>
            
            <div className='servicefee_detailabc'>
                <div className='servicefee_title'>ชั้น 4: <br></br> โรงภาพยนตร์ขนาดเล็ก ห้องเกม และพื้นที่พักผ่อน</div>
            </div>
            <div className='floor1'>
                    <img src={Floor4} className='picfloor1' alt='floor1' />
            </div>
        </div>
    </div>
  )
}

export default Floorplan