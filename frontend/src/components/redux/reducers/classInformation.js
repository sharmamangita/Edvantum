import * as actionType from "../constants/actionTypes";

const initial_state = {
    error: null,
    success: null,
    msg: null,
    classInfoList: [],
    selectedclassInfo: {}
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actionType.GET_CLASSINFO_LIST_SUCCESS:
            console.log("login success")
            return{
                ...state,
                error: null,
                classInfoList: action.classInfoList
            }
        case actionType.ADD_CLASSINFO_SUCCESS:
            return{
                ...state,
                error: null,
                success: true,
                msg: action.msg
            }
        case actionType.EDIT_CLASSINFO_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.DELETE_CLASSINFO_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.CLASSINFO_TASK_FAIL:
            return{
                ...state,
                error: true,
                success: false,
                msg: action.msg
            }
        case actionType.ERASED:
            return{
                ...state,
                error: null,
                success: null,
                msg: ""
            }
        default:
            return state;
    }
};

export default reducer;