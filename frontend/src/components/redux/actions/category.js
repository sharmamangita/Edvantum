import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const getCategorySuccess = (data) => {

    return {
        type: actionType.GET_CATEGORY_LIST_SUCCESS,
        conccessionList: data
    }

}

export const addCategorySuccess = (data) => {
    return {
        type: actionType.ADD_CATEGORY_SUCCESS,
        msg: data
    }
}

export const editCategorySuccess = (data) => {
    return {
        type: actionType.EDIT_CATEGORY_SUCCESS,
        msg: data,
    }
}

export const deleteCategorySuccess = (data) => {
    return {
        type: actionType.DELETE_CATEGORY_SUCCESS,
        msg: data
    }
}

export const CategoryTaskFail = (data = null) => {
    return {
        type: actionType.CATEGORY_TASK_FAIL,
        msg: data
    }
}

export const eraseMsg = () => {
    return {
        type: actionType.ERASED
    }
}

export const getCategory = () => {
    return (dispatch) => {
        axios.get('/api/schooladmin/getcategories', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) =>{
            if(response.data.success){
                dispatch(getCategorySuccess(response.data.data))   
            } else {
                dispatch(CategoryTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(CategoryTaskFail(err));
        })
    } 
}

export const createCategory = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/createcategory', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            if(response.data.success){
                dispatch(addCategorySuccess(response.data.msg))
                dispatch(getCategory())
            } else {
                dispatch(CategoryTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(CategoryTaskFail(err));
        })
    }
}

export const editCategory = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/updatecategory', data,{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response)=>{
            if(response.data.success){
                dispatch(editCategorySuccess(response.data.msg))
                dispatch(getCategory())
            } else {
                dispatch(CategoryTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(CategoryTaskFail(err));
        })
    }
}

export const deleteCategory = (data) => {
    return (dispatch) => {
        axios.post('/api/schooladmin/deletecategory', { _id: data },{
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => {
            console.log("-------------------------------------",response)
            if(response.data.success){
                dispatch(deleteCategorySuccess(response.data.msg))
                dispatch(getCategory())
            } else {
                dispatch(CategoryTaskFail(response.data.msg))
            }
        }).catch((err)=>{
            dispatch(CategoryTaskFail(err));
        })
    }
}