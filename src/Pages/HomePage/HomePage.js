import "./HomePage.css"
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import FieldGrid from "../../Components/FieldGrid/FieldGrid";
import {IconButton} from "@mui/material";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {useState} from "react";
import {PlayArrow} from "@mui/icons-material";
import DetailCard from "../../Components/DetailCard/DetailCard";

const HomePage = (props) => {

    const [selectedField, setSelectedField] = useState(null);

    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [detailFlag, setDetailFlag] = useState(false);

    const searchBarHandler  = (flag) => {
        setSearchBarOpen(flag);
    }

    const fieldSelectHandler = (detail) =>
    {
        setDetailFlag(true);
        setSelectedField(detail);
    }

    const fieldSelectCloseHandler = (flag) =>
    {
        setDetailFlag(flag);
    }

    return(
        <div className={"HomePage"}>
            <NavigationBar tabValue={0}/>
            <FieldGrid select={fieldSelectHandler}/>
            <SearchBar open={searchBarOpen} handler={searchBarHandler}/>
            <div className={"Search-Bar-Button-Container"}>
                <IconButton onClick={()=>{
                    setSearchBarOpen(true);
                }}>
                    <PlayArrow sx={{ height: 38, width: 38 , color:"white"}} />
                </IconButton>
            </div>
            {detailFlag?
                <DetailCard select={fieldSelectCloseHandler} field={selectedField}/>
                :null}
        </div>
    );
}

export default HomePage;

