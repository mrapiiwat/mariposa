import NavLogin from "../../component/Nav/NavLogin";
import RoomBackground from "../../component/RoomBackground/RoomBackground";
import "./ConferenceRoom.css"
import backgroung from '../../assets/conferenceroom.jpg'

const ConferenceRoom = () => {

return (
    
    <div className="confer-room-con">
        <NavLogin/>
        <RoomBackground imgOfroom={backgroung} nameofroom={'ห้องประชุม'}/>
        
    </div>
);
};

export default  ConferenceRoom;