import {Tab} from "@mui/material";


const LinkTab = (props)=>{
    return (
        <Tab
        component="a"
        onClick={(event) => {
            event.preventDefault();
        }}
        {...props}
    />);
}

export default LinkTab;
