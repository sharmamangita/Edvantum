import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const getClassInfoSuccess = (data) => {

    return {
        type: actionType.GET_CLASSINFO_LIST_SUCCESS,
        classInfoList: data
    }

}

export const addClassInfoSuccess = (data) => {
    return {
        type: actionType.ADD_CLASSINFO_SUCCESS,
        msg: data
    }
}

export const editClassInfoSuccess = (data) => {
    return {
        type: actionType.EDIT_CLASSINFO_SUCCESS,
        msg: data,
    }
}

export const deleteClassInfoSuccess = (data) => {
    return {
        type: actionType.DELETE_CLASSINFO_SUCCESS,
        msg: data
    }
}

export const ClassInfoTaskFail = (data = null) => {
    return {
        type: actionType.CLASSINFO_TASK_FAIL,
        msg: data
    }
}

export const eraseMsg = () => {
    return {
        type: actionType.ERASED
    }
}

export const getClassInfo = () => {
    return (dispatch) => {
        axios.get('/api/schooladmin/getclasses', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) =>{
            if(response.data.success){
                dispatch(getClassInfoSuccess(response.data.data))   
            } else {
                dispatch(ClassInfoTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(ClassInfoTaskFail(err));
        })
    } 
}

export const createClassInfo = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/createclass', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(addClassInfoSuccess(response.data.msg))
                dispatch(getClassInfo())
            } else {
                dispatch(ClassInfoTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(ClassInfoTaskFail(err));
        })
    }
}

export const editClassInfo = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/updateclass', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            if(response.data.success){
                dispatch(editClassInfoSuccess(response.data.msg))
                dispatch(getClassInfo())
            } else {
                dispatch(ClassInfoTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(ClassInfoTaskFail(err));
        })
    }
}

export const deleteClassInfo = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/deleteclass', { _id: data },{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(deleteClassInfoSuccess(response.data.msg))
                dispatch(getClassInfo())
            } else {
                dispatch(ClassInfoTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(ClassInfoTaskFail(err));
        })
    }
}

export const updateSubjectList = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/updatesubjectlist', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            if(response.data.success){
                dispatch(editClassInfoSuccess(response.data.msg))
                dispatch(getClassInfo())
            } else {
                dispatch(ClassInfoTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(ClassInfoTaskFail(err));
        })
    }
}