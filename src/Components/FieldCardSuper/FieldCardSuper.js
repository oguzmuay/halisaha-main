
import "./FieldCardSuper.css"
import {Button, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../Store/Auth/AuthSlice";


const FieldCardSuper = (props)=>{
    const [name, setName] = useState(props.field.name);
    const [city, setCity] = useState(props.field.city);
    const [county, setCounty] = useState(props.field.county);
    const [neighbourhood, setNeighbourhood] = useState(props.field.neighbourhood);

    const [minTime, setMinTime] = useState(props.field.parts[0].minGameTime);
    const [price, setPrice] = useState(props.field.parts[0].price);

    const cities = useSelector((state) => state.location.city);
    const counties = useSelector((state)=>state.location.county);
    const dispatch = useDispatch();

    return (
        <div className={"Field-Card-Super"}>
            <div className={"Image-Container"}>
                <img src={"./image/soccer-field.jpg"}/>
            </div>
            <div className={"Input-Container-One Input-Container"}>
                <TextField
                    value={name}
                    sx={{width: '200px' ,marginTop: "15px", marginLeft: "50px"}}
                    type={"text"}
                    className="Filter-Input"
                    label="Field Name"
                    id="outlined-start-adornment"
                    onChange={(event)=>{
                        setName(event.target.value);
                    }}
                />
                <InputLabel id="cityInput"> City </InputLabel>
                <Select labelId="cityInput"
                        value={city}
                        sx={{width: '200px' ,marginLeft: "50px"}}
                        className="Filter-Input"
                        id="demo-simple-select"
                        label="City"
                        onChange={(event)=>{
                            setCity(event.target.value);
                        }}
                >
                    {cities.map((x)=>{
                        return (
                            <MenuItem key={x.name} value={x.name}>{x.name}</MenuItem>
                        );
                    })}
                </Select>
                <InputLabel id="CountyInput"> County </InputLabel>
                <Select
                    value={county}
                    sx={{width: '200px' ,marginLeft: "50px"}}
                    labelId="CountyInput"
                    className="Filter-Input"
                    id="demo-simple-select"
                    label="City"
                    onChange={(event)=>{
                        setCounty(event.target.value)
                    }}
                >
                    {counties.filter((x)=>{
                        return  (x.admin_name === city)
                    }).map((x)=>{
                        return (
                            <MenuItem key={x.name} value={x.city}>{x.city}</MenuItem>
                        );
                    })}
                </Select>

            </div>
            <div className={"Input-Container-Two Input-Container"}>
                <InputLabel id="NeighbourhoodInput"> Neighbourhood </InputLabel>
                <Select
                    value={neighbourhood}
                    sx={{width: '200px' , marginLeft: "50px"}}
                    labelId="Neighbourhoodnput"
                    className="Filter-Input"
                    id="demo-simple-select"
                    label="City"
                    onChange={(event)=>{
                        setNeighbourhood(event.target.value)
                    }}
                >
                </Select>
                <Button
                    sx={{width:'200px', marginTop:'15px', marginLeft: '50px'}}
                    variant='contained'
                    onClick={(event)=>{
                        const newFieldData = {
                            ...props.field,
                            name:name,
                            city:city,
                            county:county,
                            neighbourhood:neighbourhood,
                            parts:[{
                                minGameTime:minTime,
                                price:price,
                            }
                            ]
                        }
                        dispatch(authAction.updateField({field:newFieldData, id:props.field.fieldID}));
                    }}
                >Save</Button>
            </div>
            <div className={"Input-Container-Three Input-Container"}>
                <TextField
                    value={price}
                    sx={{width: '200px' ,marginTop: "15px", marginLeft: "50px"}}
                    type={"number"}
                    className="Filter-Input"
                    label="Maximum Price"
                    id="outlined-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">TL</InputAdornment>,
                    }}
                    onChange={(event)=>{
                        setPrice(Number(event.target.value))
                    }}
                />
                <TextField
                    value={minTime}
                    sx={{width: '200px' ,marginTop: "15px", marginLeft: "50px"}}
                    type={"number"}
                    className="Filter-Input"
                    label="Minimum Time"
                    id="outlined-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Minute</InputAdornment>,
                    }}
                    onChange={(event)=>{
                        setMinTime(Number(event.target.value))
                    }}
                />
            </div>
        </div>
    );
}

export default FieldCardSuper;