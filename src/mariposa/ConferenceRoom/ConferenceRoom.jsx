import NavLogin from "../../component/Nav/NavLogin";
import RoomBackground from "../../component/RoomBackground/RoomBackground";
import "./ConferenceRoom.css"
import backgroung from '../../assets/conferenceroom.jpg'
import { useTransition } from "react-i18next";

const ConferenceRoom = () => {
    const {t} = useTransition();

return (
    
    <div className="confer-room-con">
        <NavLogin/>
        <RoomBackground imgOfroom={backgroung} nameofroom={t('conference-title')}/>
        
    </div>
);
};

export default  ConferenceRoom;