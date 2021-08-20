import * as actionType from "../constants/actionTypes";

const initial_state = {
    error: null,
    success: null,
    msg: null,
    SubjectList: [],
    selectedSubject: {}
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actionType.GET_SUBJECT_LIST_SUCCESS:
            return{
                ...state,
                error: null,
                SubjectList: action.conccessionList
            }
        case actionType.ADD_SUBJECT_SUCCESS:
            return{
                ...state,
                error: null,
                success: true,
                msg: action.msg
            }
        case actionType.EDIT_SUBJECT_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.DELETE_SUBJECT_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.SUBJECT_TASK_FAIL:
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