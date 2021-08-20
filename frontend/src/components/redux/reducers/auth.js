import * as actionType from "../constants/actionTypes";

const initial_state = {
    error: null
};

const reducer = (state = initial_state, action) => {
    switch(action.type) {
        case actionType.SIGNIN_SUCCESS:
            console.log("login success")
            return{
                ...state,
                error: null
            }
        case actionType.SIGNIN_FAIL:
            return{
                ...state,
                error: true
            }
        case actionType.LOGOUT:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
};

export default reducer;