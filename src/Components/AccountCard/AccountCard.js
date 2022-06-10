import {Fragment, useState} from "react";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    InputLabel,
    TextField,
    Typography
} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {CheckBox, Label} from "@mui/icons-material";

import {useSelector} from "react-redux";

const AccountCard = (props)=>{

    const userID = useSelector(state => state.auth.auth.userID);

    let user = useSelector(state => state.auth.user.array)
    user = user.filter((x)=>{
        return (x.userId === userID);
    })

    const [userData, setUserData] = useState({...user[0],});

    console.log(userData);


    const superCheckHandler = (event) => {
        setUserData({...userData, isSuper: event.target.checked});
    }

    const usernameHandler = (event) => {
        setUserData({...userData, username: event.target.value});
    }
    const nameHandler = (event) => {
        setUserData({...userData, name: event.target.value});
    }
    const surnameHandler = (event) => {
        setUserData({...userData, surname: event.target.value});
    }
    const emailHandler = (event) => {
        setUserData({...userData, email: event.target.value});
    }

    return(
        <Fragment>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
            >
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card
                        elevation={5}
                        sx={{margin:'auto'}}
                    >
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{
                                        bgcolor: deepOrange[500], width: 64, height: 64
                                    }}
                                >
                                    BS
                                </Avatar>}
                            title={
                                userData.name + " " + userData.surname
                            }
                        ></CardHeader>
                        <CardContent>
                            <TextField sx={{width:270}} label={"Username"} variant={"standard"} defaultValue={userData.username} onChange={usernameHandler}></TextField>
                        </CardContent>
                        <CardContent>
                            <TextField sx={{width:270}}  label={"Email"} variant={"standard"} defaultValue={userData.email} onChange={emailHandler}></TextField>
                        </CardContent>
                        <CardContent>
                            <TextField sx={{width:270}}  label={"Name"} variant={"standard"} defaultValue={userData.name} onChange={nameHandler}></TextField>
                        </CardContent>
                        <CardContent>
                            <TextField sx={{width:270}} label={"Surname"} variant={"standard"} defaultValue={userData.surname} onChange={surnameHandler}></TextField>
                        </CardContent>
                        <CardContent>
                            <InputLabel id="SuperCheck"> Is Super ? </InputLabel>
                            <CheckBox  labelid="SuperCheck" variant={"standard"} checked={userData.isSuper} onChange={superCheckHandler} onChange={superCheckHandler}></CheckBox>
                            <Typography color="text.secondary">
                                If you want to add field check box !
                            </Typography>
                        </CardContent>
                        <CardContent
                            sx={{display:"flex",justifyContent:"center"}}
                        >
                            <Button onClick={()=>{

                            }} variant={"contained"} sx={{bgcolor:"rgba(5,184,34,255)"}}>Save</Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Fragment>);
}

export default AccountCard;



