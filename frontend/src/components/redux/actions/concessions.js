import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const getConcessionSuccess = (data) => {

    return {
        type: actionType.GET_CONCESSION_LIST_SUCCESS,
        conccessionList: data
    }

}

export const addConcessionSuccess = (data) => {
    return {
        type: actionType.ADD_CONCESSION_SUCCESS,
        msg: data
    }
}

export const editConcessionSuccess = (data) => {
    return {
        type: actionType.EDIT_CONCESSION_SUCCESS,
        msg: data,
    }
}

export const deleteConcessionSuccess = (data) => {
    return {
        type: actionType.DELETE_CONCESSION_SUCCESS,
        msg: data
    }
}

export const concessionTaskFail = (data = null) => {
    return {
        type: actionType.CONCESSION_TASK_FAIL,
        msg: data
    }
}

export const eraseMsg = () => {
    return {
        type: actionType.ERASED
    }
}

export const getConcession = () => {
    return (dispatch) => {
        axios.get('/api/schooladmin/getconcessions', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) =>{
            if(response.data.success){
                dispatch(getConcessionSuccess(response.data.data))   
            } else {
                dispatch(concessionTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(concessionTaskFail(err));
        })
    } 
}

export const createConcession = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/createconcession', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(addConcessionSuccess(response.data.msg))
                dispatch(getConcession())
            } else {
                dispatch(concessionTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(concessionTaskFail(err));
        })
    }
}

export const editConcession = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/updateconcession', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            if(response.data.success){
                dispatch(editConcessionSuccess(response.data.msg))
                dispatch(getConcession())
            } else {
                dispatch(concessionTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(concessionTaskFail(err));
        })
    }
}

export const deleteConcession = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/deleteconcession', { id: data },{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(deleteConcessionSuccess(response.data.msg))
                dispatch(getConcession())
            } else {
                dispatch(concessionTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(concessionTaskFail(err));
        })
    }
}