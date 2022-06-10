import {createSlice} from "@reduxjs/toolkit";

import { cities} from "../Cities";
import {county} from "../County"

const locationSlice = createSlice({
    name: 'locations',
    initialState: {
        city: cities,
        county: county
    },
    reducers:{

    }
});


export default locationSlice;