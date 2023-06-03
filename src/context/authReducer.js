import { types } from "../auth/types";

export const authReducer = ( state = {}, action ) => {
  switch( action?.type) {
    case types.login: 
        return {
            ...state,
            status: 'authenticated',
            user: action.payload,
            msg: ''
        };
    case types.logout: 
        return{
            status: 'not-authenticated',
            msg: action.payload
        };
    case types.clearErrorMessage:
      return {
        ...state,
        msg: ''
      };
    default: return state;
  }
}
