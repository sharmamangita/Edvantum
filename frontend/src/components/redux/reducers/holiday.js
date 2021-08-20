import * as actionType from "../constants/actionTypes";

const initial_state = {
    error: null,
    success: null,
    msg: null,
    holidaysList: [],
    selectedHoliday: {}
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actionType.GET_HOLIDAY_LIST_SUCCESS:
            return{
                ...state,
                error: null,
                holidaysList: action.hoildayList
            }
        case actionType.ADD_HOLIDAY_SUCCESS:
            return{
                ...state,
                error: null,
                success: true,
                msg: action.msg
            }
        case actionType.EDIT_HOLIDAY_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.DELETE_HOLIDAY_SUCCESS:
            return{
                ...state,
                error:null,
                success: true,
                msg: action.msg
            }
        case actionType.HOLIDAY_TASK_FAIL:
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