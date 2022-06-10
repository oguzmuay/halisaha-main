import { configureStore, createSlice } from "@reduxjs/toolkit";

import authSlice from "./Auth/AuthSlice"
import locationSlice from "./Location/LocationSlice";

const store = configureStore({
    reducer: { 
        auth:authSlice.reducer,
        location: locationSlice.reducer
    } 
});

export default store;