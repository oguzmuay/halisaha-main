import "./DetailCard.css"
import {Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControlLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {authAction} from "../../Store/Auth/AuthSlice";
import {initialBookingData} from "../../Store/data";
import * as emailjs from "@emailjs/browser";

const DetailCard = (props) => {
    const id = useSelector(state => state.auth.auth.userID);
    const user = useSelector(state => state.auth.user.array).filter((x)=>{
        return(x.userId === id);
    })
    const bookCount = useSelector(state => state.auth.booking.count);
    const booking = useSelector(state => state.auth.booking.array).filter((x)=>{
        return (x.userID === id && props.field.fieldID === x.fieldID);
    });

    let tempArray = [];
    let tempSelectedArray = [];
    for (let i = props.field.openTime; i < props.field.closeTime; i+=props.field.minGameTime) {
        tempArray.push(i);
        tempSelectedArray.push(false);
    }
    const [timeArray, setTimeArray] = useState(tempArray);

    const [selectedTime, setSelectedArray] = useState(tempSelectedArray);

    const timeLineHandler = (event, index) => {
        let array = [...selectedTime];
        array[index] = event.target.checked;
        setSelectedArray(array);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(user.email);
        var templateParams = {
            email: user.email,
            time: timeArray.filter((x, index)=>{
                return (selectedTime[index]);
            }).map((x)=>{
                return (Math.floor(x/60))+":"+ x%60 + " ";
            })
        };

        emailjs.send('service_j9nrqrc', 'template_aigipmo', templateParams, "v9zF0aEjhnBqKpvmI")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    };

    const dispatch = useDispatch();

    return (
        <div className={"Detail-Card"}>
            <Card sx={{width:"30%"}}>
                <CardHeader
                    title={"Details"}
                    subheader={props.field.name}
                />
                <CardContent>
                    Total Price: {props.field.price * selectedTime.filter((x)=>{
                        return x
                }).length} .TL
                </CardContent>
                <CardActions sx={{
                    width:"100%",
                    maxHeight:"40%",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "scroll",
                    textAlign:"left"
                }}>
                    {
                        timeArray.map((x, index)=>{
                            let flag = false;
                            for (let i = 0; i < booking.length; i++) {
                                 if (booking[i].times.includes(x)){
                                     flag = true;
                                     break;
                                 }
                            }
                            return(
                                <FormControlLabel
                                    key={"time:"+index}
                                    disabled={flag}
                                    label= {Math.floor(x/60) + "." + x%60 + "/" + Math.floor((x+props.field.minGameTime)/60) + "." + (x+props.field.minGameTime)%60}
                                    control={
                                    <Checkbox checked={selectedTime[index]} onChange={(event)=>{
                                        timeLineHandler(event, index);
                                    }}/>}
                                />
                            )
                        })
                    }
                </CardActions>
                <CardActions
                    sx={{display:"flex",justifyContent:"center"}}
                >
                    <Button
                    sx={{bgcolor:"rgba(5,184,34,255)"}}
                        variant={"contained"} onClick={
                        (event)=>{
                            let book = {...initialBookingData}
                            book.bookID = bookCount;
                            book.fieldID = props.field.fieldID;
                            book.userID = id;
                            book.times = timeArray.filter((x, index)=>{
                                return (selectedTime[index]);
                            })
                            book.price = book.times.length * props.field.price;
                            dispatch(authAction.addBooking(book));
                            sendEmail(event);
                            props.select(false);
                        }
                    }> Reserve </Button>
                    <Button
                        sx={{bgcolor:"rgba(5,184,34,255)"}}
                        variant={"contained"}
                            onClick={(e)=>{
                                props.select(false);
                            }}
                    > Cancel </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default DetailCard;