import "./AccountPage.css"
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import AccountCard from "../../Components/AccountCard/AccountCard";
import {useSelector} from "react-redux";


const AccountPage = (props) =>{
    const isSuper = useSelector((state)=> state.auth.auth.isSuper);
    return (
        <div className={"Account-Page"}>
            <NavigationBar tabValue={isSuper?3:2}/>
            <div className={"Account-Details"}>
                <AccountCard/>
            </div>
        </div>);
}

export default AccountPage;