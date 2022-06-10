
import "./LoginPage.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../Store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    InputLabel,
    TextField,
    Typography
} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {CheckBox} from "@mui/icons-material";

const LoginPage = (props) => {

    const navigate = useNavigate();

    const login = (username, password) => {
        dispatch(authAction.login({username:username, password: password}));
        navigate("/home");
    };

    const dispatch = useDispatch();
    const loginMessage = useSelector((state) => state.auth.auth.loginMessage);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className="Root">
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
                        <TextField sx={{width:270}} label={"Password"} variant={"filled"} onChange={
                            (event)=>{
                                setPassword(event.target.value);
                            }}>

                        </TextField>
                    </CardContent>
                    <CardContent>
                        If You Don't Have Account ?<a href="\Register"> Register </a>
                    </CardContent>
                    <CardActions sx={{display:"flex", justifyContent:"center"}}>
                        <Button
                            sx={{bgcolor:"rgba(5,184,34,255)"}}
                            onClick={()=>{
                            login(username, password);
                        }} variant={"contained"} >Login</Button>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
    </div>
  );
};

export default LoginPage;
