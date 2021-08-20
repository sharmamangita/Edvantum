import * as actionType from "../constants/actionTypes";

const initial_state = {
    error: null,
    success: null,
    msg: null,
    categoryList: [],
    selectedCategory: {}
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actionType.GET_CATEGORY_LIST_SUCCESS:
            return{
                ...state,
                error: null,
                categoryList: action.conccessionList
            }
        case actionType.ADD_CATEGORY_SUCCESS:
            return{
                ...state,
                error: null,
                success: true,
                msg: action.msg
            }
        case actionType.EDIT_CATEGORY_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.DELETE_CATEGORY_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.CATEGORY_TASK_FAIL:
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