import * as actionType from "../constants/actionTypes";

const initial_state = {
    error: null,
    success: null,
    msg: null,
    concessionList: [],
    selectedConcession: {}
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actionType.GET_CONCESSION_LIST_SUCCESS:
            console.log("login success")
            return{
                ...state,
                error: null,
                concessionList: action.conccessionList
            }
        case actionType.ADD_CONCESSION_SUCCESS:
            return{
                ...state,
                error: null,
                success: true,
                msg: action.msg
            }
        case actionType.EDIT_CONCESSION_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.DELETE_CONCESSION_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.CONCESSION_TASK_FAIL:
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