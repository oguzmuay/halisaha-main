import "./RegisterPage.css"
import {useState} from "react";
import {authAction} from "../../Store/Auth/AuthSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, CardActions, CardContent, CardHeader, Grid, TextField} from "@mui/material";

const RegisterPage = (props) =>{

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const dispatch = useDispatch();
    const registerMessage = useSelector((state)=>state.auth.auth.registerMessage);
    const register = (username, email, password, repassword) => {
        dispatch(authAction.register({username: username, email: email, password: password, repassword: repassword}));
    }

    return (
        <div className = "Root">
            <div className="Top-Field">
        <span className="Title"> E-Soccer Field </span>
        <span className="Description"> Servise For Soccer Field Booking </span>
      </div>
            <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
            >
                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Card
                        elevation={5}
                        sx={{margin:'auto' ,bgcolor:"white"}}
                    >
                        <CardHeader
                        ></CardHeader>
                        <CardContent>
                            <TextField sx={{width:270}} label={"Username"} variant={"filled"} onChange={
                                (event)=>{
                                    setUsername(event.target.value);
                                }
                            }></TextField>
                        </CardContent>
                        <CardContent>
                            <TextField sx={{width:270}} label={"Email"} variant={"filled"} onChange={
                                (event)=>{
                                    setEmail(event.target.value);
                                }
                            }></TextField>
                        </CardContent>
                        <CardContent>
                            <TextField sx={{width:270}} label={"Password"} variant={"filled"} onChange={
                                (event)=>{
                                    setPassword(event.target.value);
                                }}>

                            </TextField>
                        </CardContent>
                        <CardContent>
                            <TextField sx={{width:270}} label={"Re-Password"} variant={"filled"} onChange={
                                (event)=>{
                                    setRepassword(event.target.value);
                                }}>

                            </TextField>
                        </CardContent>
                        <CardContent>
                            If You Have Account<a href="\Login"> Login </a>
                        </CardContent>
                        <CardActions sx={{display:"flex", justifyContent:"center"}}>
                            <Button
                                sx={{bgcolor:"rgba(5,184,34,255)"}}
                                onClick={()=>{
                                    register(username, password);
                                }} variant={"contained"} >Register</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div>  
    );

}

export default RegisterPage;

