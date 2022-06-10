import "./NavigationBar.css"
import {createTheme, Tab, Tabs, ThemeProvider} from "@mui/material";
import LinkTab from "../LinkTab/LinkTab";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const NavigationBar = (props) => {

    const isSuper = useSelector((state)=>state.auth.auth.isSuper);

    const [tabValue, setTabValue] = useState(props.tabValue);

    const navigate = useNavigate();

    const TabTheme = createTheme({
        platte:{
            primary:{
                main: '#ffffff',
            }
        }
    });

    const tabHandler = (event, newValue) =>{
        setTabValue(newValue);
    }
    return (
        <div className="Navigation">
            <ThemeProvider theme={TabTheme}>
                <Tabs
                    onChange={tabHandler}
                    variant={"fullWidth"}
                    value={tabValue}
                    >
                    <LinkTab label={"Home"} href={"/home"} onClick={(event)=>{
                        event.preventDefault();
                        navigate("/home");
                    }}/>
                    {isSuper?<LinkTab label={"Super"} href={"/super"} onClick={(event)=>{
                        event.preventDefault();
                        navigate("/super");
                    }}/>:null}
                    <LinkTab label={"My Rezervations"} href={"/myrezervations"} onClick={(event)=>{
                        event.preventDefault();
                        navigate("/myrezervations");
                    }}/>
                    <LinkTab label={"Account"} href={"/account"} onClick={(event)=>{
                        event.preventDefault();
                        navigate("/account");
                    }}/>
                </Tabs>
            </ThemeProvider>
        </div>
    );
}

export default NavigationBar;