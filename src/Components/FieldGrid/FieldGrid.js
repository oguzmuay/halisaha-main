import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import FieldCard from "../FieldCard/FieldCard";


const FieldGrid = (props) =>{

    const filterData = useSelector((state) => state.auth.filter);
    const fieldData = useSelector((state) => state.auth.fields.array);

    const checkFilter = (value, filter) => {
        if (filter === "" || filter === 0){
            return true;
        }

        if (filter === value){
            return true;
        }

        return false;
    }

    return(
        <Grid container rowSpacing={1} columnSpacing={1}>
            {fieldData.filter((x)=>{
                if (checkFilter(x.city, filterData.city) &&
                    checkFilter(x.county, filterData.county) &&
                    checkFilter(x.neighbourhood, filterData.neighbourhood) &&
                    checkFilter(x.street, filterData.street) &&
                    checkFilter(x.mainStreet, filterData.mainStreet)){
                    for (let i = 0; i < x.parts.length; i++) {
                        let part = x.parts[i];
                        if ((part.price <= filterData.maxPrice || filterData.maxPrice === 0) &&
                            (part.minGameTime <= filterData.minGameTime || filterData.minGameTime === 0))
                        {
                            return x;
                        }
                    }
                }
                return null;
            }).map((x)=>{
                return (
                    <Grid item  xs={12} sm={9} md={6} lg={3} xl={2} key={"field:"+ x.fieldId}>
                        <FieldCard field={x} select={props.select}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default FieldGrid;