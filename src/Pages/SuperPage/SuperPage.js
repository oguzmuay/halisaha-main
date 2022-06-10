import "./SuperPage.css"
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import FieldCardSuper from "../../Components/FieldCardSuper/FieldCardSuper";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {authAction} from "../../Store/Auth/AuthSlice";
import {initialFieldData} from "../../Store/data"

const SuperPage = (props)=>{

    const userData = useSelector((state) => state.auth.auth);
    const fields = useSelector((state) => state.auth.fields.array);
    const fieldCount = useSelector((state) => state.auth.fields.count)
    const dispatch = useDispatch();

    return(
        <div className={"Super-Page"}>
            <NavigationBar tabValue={1}/>
            <div className={"Field-Container"}>
                {
                    fields.filter((x)=>{
                        return true;
                        //(x.ownerID === userData.userID)
                    }).map((x, index)=>{
                        return (<FieldCardSuper key={"fieldSuper:"+index} field={x}/>);
                    })
                }
                <Button
                    variant={"contained"}
                    sx={{
                    width:"80%",
                        marginLeft:"10%",
                        height:"200px",
                        marginTop:"50px"
                }}
                    onClick={(event)=>{
                        dispatch(authAction.addField({
                            ...initialFieldData,
                            ownerID: userData.userID,
                            fieldID: fieldCount,
                        }));
                    }}
                >
                    Add Field
                </Button>
            </div>
        </div>);
}

export default SuperPage;