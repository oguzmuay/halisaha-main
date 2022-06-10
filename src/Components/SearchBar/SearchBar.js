import "./SearchBar.css"
import {useState} from "react";
import {Box, Button, Drawer, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {initialFilterData} from "../../Store/data";
import {authAction} from "../../Store/Auth/AuthSlice";

const SearchBar = (props) =>
{

    const dispatch = useDispatch();

    const filter = useSelector((state)=>state.auth.filter);

    const [city, setCity] = useState(filter.city);
    const [county, setCounty] = useState(filter.county);
    const [neighbourhood, setNeighbourhood] = useState(filter.neighbourhood);
    const [street, setStreet] = useState(filter.street);
    const [mainStreet, setMainStreet] = useState(filter.mainStreet);

    const [maxPrice, setMaxPrice] = useState(filter.minGameTime);
    const [minGameTime, setMinGameTime] = useState(filter.maxPrice);

    const cities = useSelector((state) => state.location.city);
    const counties = useSelector((state)=>state.location.county);

    const submitButtonHandler = (event) => {
        const data = {...initialFilterData};
        data.city = city;
        data.county = county;
        data.neighbourhood = neighbourhood;
        data.street = street;
        data.mainStreet = mainStreet;
        data.maxPrice = maxPrice;
        data.minGameTime = minGameTime;

        dispatch(authAction.fieldFilter(data));

    }

    return(
        <Drawer
            anchor={"left"}
            open={props.open}
            onClose={()=>{
                props.handler(false);
            }}
        >
            <Box
                sx={{ width: 300 }}
            >
                <InputLabel id="cityInput"> City </InputLabel>
                <Select labelId="cityInput"
                        sx={{width: '200px' ,marginLeft: "50px"}}
                        className="Filter-Input"
                        id="demo-simple-select"
                        value={city}
                        label="City"
                        onChange={(event)=>{
                            setCity(event.target.value);
                        }}
                >
                    {cities.map((x,index)=>{
                        return (
                            <MenuItem key={"cities:"+index} value={x.name}>{x.name}</MenuItem>
                        );
                    })}
                </Select>
                <InputLabel id="CountyInput"> County </InputLabel>
                <Select
                    sx={{width: '200px' ,marginLeft: "50px"}}
                    labelId="CountyInput"
                        className="Filter-Input"
                        id="demo-simple-select"
                        value={county}
                        label="City"
                        onChange={(event)=>{
                            setCounty(event.target.value);
                        }}
                >
                    {counties.filter((x)=>{
                        return  (x.admin_name === city)
                    }).map((x, index)=>{
                        return (
                            <MenuItem key={"counties:"+index} value={x.city}>{x.city}</MenuItem>
                        );
                    })}
                </Select>
                <InputLabel id="NeighbourhoodInput"> Neighbourhood </InputLabel>
                <Select
                    sx={{width: '200px' , marginLeft: "50px"}}
                    labelId="Neighbourhoodnput"
                        className="Filter-Input"
                        id="demo-simple-select"
                        value={neighbourhood}
                        label="City"
                        onChange={(event)=>{
                            setNeighbourhood(event.target.value);
                        }}
                >
                </Select>
                <InputLabel id="StreetInput"> Street </InputLabel>
                <Select
                    sx={{width: '200px' , marginLeft: "50px"}}
                    labelId="StreetInput"
                        className="Filter-Input"
                        id="demo-simple-select"
                        value={street}
                        label="City"
                        onChange={(event)=>{
                            setStreet(event.target.value);
                        }}
                >

                </Select>
                <InputLabel id="MainStreetInput"> Main Street </InputLabel>
                <Select
                    sx={{width: '200px' ,marginLeft: "50px"}}
                    labelId="MainStreetInput"
                        className="Filter-Input"
                        id="demo-simple-select"
                        value={mainStreet}
                        label="City"
                        onChange={(event)=>{
                            setMainStreet(event.target.value);
                        }}
                >
                </Select>
                <TextField
                    sx={{width: '200px' ,marginTop: "15px", marginLeft: "50px"}}
                    type={"number"}
                    className="Filter-Input"
                    label="Maximum Price"
                    id="outlined-start-adornment"
                    value={maxPrice}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">TL</InputAdornment>,
                    }}
                    onChange={(event)=>{
                        setMaxPrice(Number(event.target.value));
                    }}
                />
                <TextField
                    sx={{width: '200px' ,marginTop: "15px", marginLeft: "50px"}}
                    type={"number"}
                    className="Filter-Input"
                    label="Minimum Time"
                    id="outlined-start-adornment"
                    value={minGameTime}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Minute</InputAdornment>,
                    }}
                    onChange={(event)=>{
                        setMinGameTime(Number(event.target.value));
                    }}
                />
                <Button
                sx={{width:'200px', marginTop:'15px', marginLeft: '50px',bgcolor:"rgba(5,184,34,255)"}}
                variant='contained'
                onClick={submitButtonHandler}
                >Filter</Button>
            </Box>
        </Drawer>
    );
}

export default SearchBar;
