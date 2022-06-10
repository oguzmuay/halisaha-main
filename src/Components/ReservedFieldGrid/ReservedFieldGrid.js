import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import ReservedFieldCard from "../ReservedFieldCard/ReservedFieldCard";

const ReservedFieldGrid = (props)=>{
    const userID = useSelector(state => state.auth.auth.userID);
    const bookData = useSelector(state => state.auth.booking.array).filter((x)=>{
        return (true)
    });
    //x.userID === userID
    return(
        <Grid container rowSpacing={1} columnSpacing={1}>
            {
                bookData.map((x)=>{
                return (
                    <Grid item  xs={12} sm={9} md={6} lg={3} xl={2} key={"field:"+ x.fieldId}>
                        <ReservedFieldCard book={x}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default ReservedFieldGrid;