import React from 'react'
import Nav from "../../component/Nav/Nav";


const Servicefee = () => {
  return (
    <div className='servicefee_con'>
        <Nav/>
        <div className='servicefee'>
            <div className='servicefee_detail'>
                <div className='servicefee_title'>
                    อัตราค่าบริการสำหรับบุคคลภายนอก
                </div>
                <div className='servicefee_doc'>
                    <ol className='servicefee_list'>
                        <li>จองห้องประชุมขนาดเล็ก ครึ่งชั่วโมง 20 บาท</li>
                        <li>จองห้องประชุมขนาดกลาง ชั่วโมง 30 บาท</li>
                        <li>จองห้องประชุมขนาดใหญ่ ชั่วโมง 50 บาท</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicefee