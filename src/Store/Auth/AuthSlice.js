import {createSlice} from "@reduxjs/toolkit";
import data from "../data";

const authSlice = createSlice({
    name: 'auth',
    initialState: data,
    reducers:{
        login(state, action){
            let username = action.payload.username;
            let password = action.payload.password;

            let userDatas = state.user.array;
            for (let i = 0; i < userDatas.length; i++) {
                let user = userDatas[i];
                if (user.username === username){
                    if (user.password === password){
                        state.auth.loginMessage = "Successfully Logged In !";
                        state.auth.username = user.username;
                        state.auth.userID = user.userId;
                        state.auth.isSuper = user.isSuper;
                        state.auth.isLoggedIn = true;
                        //TODO: Navigate MainPage
                        break;
                    }else{
                        state.auth.loginMessage = "Username or Password Wrong !";
                    }
                }else{
                    state.auth.loginMessage = "Username or Password Wrong !";
                }
            }
        },
        register(state, action){
            let username = action.payload.username;
            let email = action.payload.email;
            let password = action.payload.password;
            let repassword = action.payload.repassword;

            if  (password !== repassword) {
                state.auth.registerMessage = "Password must be same with RePassword !"
                return;
            }

            let userDatas = state.user.array;

            let foundFlag = false;
            for (let i = 0; i < userDatas.length; i++) {
                let user = userDatas[i];
                if (user.username === username || user.email === email) {
                    foundFlag = true;
                    break;
                }
            }

            if (foundFlag) {
                state.auth.registerMessage = "Username Or Email Already Taken !";
            }else{
                let userData = {
                    username:username,
                    password:password,
                    userId: state.user.userCount,
                    isSuper: false,
                    //TODO: Is super eklenecek
                }
                state.user.array = [...state.user.array,userData];
                state.user.userCount = state.user.userCount+1;
                console.log(userData);
            }

        },
        addField(state, action){
            state.fields.count += 1;
            state.fields.array.push({...action.payload});
        },
        removeField(state, action){

        },
        updateField(state, action){
            let fieldArray = [...state.fields.array];
            fieldArray[action.payload.id] = {...action.payload.field};
            state.fields.array = [...fieldArray];
        },
        favoriteField(state, action){
            let fieldArray = [...state.fields.array];
            fieldArray[action.payload.id].isFavorite = action.payload.isFavorite;
            state.fields.array = [...fieldArray];
        },
        fieldFilter(state, action){
            state.filter = {...action.payload};
        },
        addBooking(state, action) {
            state.booking.count += 1;
            let arr = [...state.booking.array];
            arr.push(action.payload);
            state.booking.array = [...arr];
            //TODO Mail attiricaz
        },
        removeBooking(state, action){
            state.booking.count -= 1;
            let arr = [...state.booking.array];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].bookID === action.payload){
                    arr.pop(i);
                }
            }
            state.booking.array = [...arr];
        }
    }
});

export const authAction = authSlice.actions;

export default authSlice;