import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const getHolidaySuccess = (data) => {

    return {
        type: actionType.GET_HOLIDAY_LIST_SUCCESS,
        hoildayList: data
    }

}

export const addHolidaySuccess = (data) => {
    return {
        type: actionType.ADD_HOLIDAY_SUCCESS,
        msg: data
    }
}

export const editHolidaySuccess = (data) => {
    return {
        type: actionType.EDIT_HOLIDAY_SUCCESS,
        msg: data,
    }
}

export const deleteHolidaySuccess = (data) => {
    return {
        type: actionType.DELETE_HOLIDAY_SUCCESS,
        msg: data
    }
}

export const HolidayTaskFail = (data = null) => {
    return {
        type: actionType.HOLIDAY_TASK_FAIL,
        msg: data
    }
}

export const eraseMsg = () => {
    return {
        type: actionType.ERASED
    }
}

export const getHoliday = () => {
    return (dispatch) => {
        axios.get('/api/schooladmin/getholidays', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) =>{
            if(response.data.success){
                dispatch(getHolidaySuccess(response.data.data))   
            } else {
                dispatch(HolidayTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(HolidayTaskFail(err));
        })
    } 
}

export const createHoliday = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/createholiday', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(addHolidaySuccess(response.data.msg))
                dispatch(getHoliday())
            } else {
                dispatch(HolidayTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(HolidayTaskFail(err));
        })
    }
}

export const editHoliday = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/updateholiday', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            if(response.data.success){
                dispatch(editHolidaySuccess(response.data.msg))
                dispatch(getHoliday())
            } else {
                dispatch(HolidayTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(HolidayTaskFail(err));
        })
    }
}

export const deleteHoliday = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/deleteholiday', { id: data },{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(deleteHolidaySuccess(response.data.msg))
                dispatch(getHoliday())
            } else {
                dispatch(HolidayTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(HolidayTaskFail(err));
        })
    }
}

export const activateHoliday = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/activateholidays', data, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(deleteHolidaySuccess(response.data.msg))
                dispatch(getHoliday())
            } else {
                dispatch(HolidayTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(HolidayTaskFail(err));
        })
    }
}