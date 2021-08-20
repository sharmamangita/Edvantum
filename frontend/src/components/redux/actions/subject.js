import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const getSubjectSuccess = (data) => {

    return {
        type: actionType.GET_SUBJECT_LIST_SUCCESS,
        conccessionList: data
    }

}

export const addSubjectSuccess = (data) => {
    return {
        type: actionType.ADD_SUBJECT_SUCCESS,
        msg: data
    }
}

export const editSubjectSuccess = (data) => {
    return {
        type: actionType.EDIT_SUBJECT_SUCCESS,
        msg: data,
    }
}

export const deleteSubjectSuccess = (data) => {
    return {
        type: actionType.DELETE_SUBJECT_SUCCESS,
        msg: data
    }
}

export const SubjectTaskFail = (data = null) => {
    return {
        type: actionType.SUBJECT_TASK_FAIL,
        msg: data
    }
}

export const eraseMsg = () => {
    return {
        type: actionType.ERASED
    }
}

export const getSubject = () => {
    return (dispatch) => {
        axios.get('/api/schooladmin/getsubjects', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) =>{
            if(response.data.success){
                dispatch(getSubjectSuccess(response.data.data))   
            } else {
                dispatch(SubjectTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(SubjectTaskFail(err));
        })
    } 
}

export const createSubject = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/createsubject', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(addSubjectSuccess(response.data.msg))
                dispatch(getSubject())
            } else {
                dispatch(SubjectTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(SubjectTaskFail(err));
        })
    }
}

export const editSubject = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/updatesubject', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            if(response.data.success){
                dispatch(editSubjectSuccess(response.data.msg))
                dispatch(getSubject())
            } else {
                dispatch(SubjectTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(SubjectTaskFail(err));
        })
    }
}

export const deleteSubject = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/deletesubject', { _id: data },{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(deleteSubjectSuccess(response.data.msg))
                dispatch(getSubject())
            } else {
                dispatch(SubjectTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(SubjectTaskFail(err));
        })
    }
}