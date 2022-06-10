import {Button, Card, CardActions, CardHeader, CardMedia, IconButton} from "@mui/material";
import { Favorite } from '@mui/icons-material';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../Store/Auth/AuthSlice";

const FieldCard = (props) =>{
    const dispatch = useDispatch();
    let user = useSelector(state => state.auth.user.array);

    user = user.filter((x)=>{
        return (x.userId === props.field.ownerID)
    })

    return(
        <Card variant={"outlined"}>
            <CardHeader
                title={props.field.name}
                subheader={user[0].username}
            ></CardHeader>
            <CardMedia
                src={"./image/soccer-field.jpg"}
                component="img"
                alt="Field Image"
                height="150"
            />
            <CardActions>
                <IconButton aria-label="add to favorites" onClick={
                    (event)=>{
                        dispatch(authAction.favoriteField({id:props.field.fieldID, isFavorite:event.target.checked}));
                    }
                }>
                    <Favorite sx={{ color: props.field.isFavorite ? "#FF0000" : "#808080" }}/>
                </IconButton>
                <Button
                    sx={{bgcolor:"rgba(5,184,34,255)"}}
                    onClick={
                    (event)=>{
                        props.select(props.field)
                    }
                } variant={"contained"} size="small">Details</Button>
            </CardActions>
        </Card>
    );
}

export default FieldCard;