import {useSelector} from "react-redux";
import { Outlet, Navigate } from "react-router-dom";



const HiddenRoute = ()=>{
    const isLoggedIn = useSelector((state) => state.auth.auth.isLoggedIn);
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default HiddenRoute;
