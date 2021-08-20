import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const signInSuccess = (userData) => {
    return {
        type: actionType.SIGNIN_SUCCESS,
        token: userData
    }
}

export const signInFail = (error = null) => {
    return {
        type: actionType.SIGNIN_FAIL,
        error: error
    }
}

export const signIn = (userData) => {
    console.log("you clicked on signIn");
    if(userData.username && userData.password) {
        return (dispatch) => {
            axios.post('/auth/login', userData, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then((response) => {
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })
        }
    } else {
        console.log("username and password is required")
    }
}

export const logout = () => {
    console.log("you clicked on logout");
    // return (dispatch) => {
    //     axios.post().then().catch()
    // }
}