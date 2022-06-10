import "./ReservationPage.css"
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import {useSelector} from "react-redux";
import ReservedFieldGrid from "../../Components/ReservedFieldGrid/ReservedFieldGrid";


const ReservationPage = (props) =>{
    const isSuper = useSelector((state)=> state.auth.auth.isSuper);
    return (
        <div className={"Reservation-Page"}>
            <NavigationBar tabValue={isSuper?2:1}/>
            <ReservedFieldGrid/>
    </div>);
}

export default ReservationPage;