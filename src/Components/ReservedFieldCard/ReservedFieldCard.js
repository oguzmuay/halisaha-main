import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton} from "@mui/material";
import {Delete, Favorite} from '@mui/icons-material';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../Store/Auth/AuthSlice";
import * as emailjs from "@emailjs/browser";

const ReservedFieldCard = (props) =>{
    const dispatch = useDispatch();

    const fieldData = useSelector(state => state.auth.fields.array).filter((x)=>{
        return (x.fieldID === props.book.fieldID)
    })[0];

    return(
        <Card variant={"outlined"}>
            <CardHeader
                title={fieldData.name}
                subheader={fieldData.city+" "+fieldData.county}
            ></CardHeader>
            <CardMedia
                src={"./image/soccer-field.jpg"}
                component="img"
                alt="Field Image"
                height="150"
            />
            <CardContent>
                Times: {props.book.times.map(x =>{
                    return (Math.floor(x/60)+":"+x%60 + "  ")
            })}
            </CardContent>
            <CardContent>
                Price: {props.book.price} TL
            </CardContent>
            <CardActions>
                <IconButton onClick={
                    (event)=>{
                        dispatch(authAction.removeBooking(props.book.bookID));
                        //TODO: Iptal edildi mail
                    }
                }>
                    <Delete/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ReservedFieldCard;