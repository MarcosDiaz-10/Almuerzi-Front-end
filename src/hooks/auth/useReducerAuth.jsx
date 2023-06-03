import { useReducer } from "react";

import { types } from "../../auth/types";
import { authReducer } from "../../context/authReducer";

const init = () => {

    return {
        
        user: {},
        status: 'not-authenticated',
        msg: ''

    }
}

export const useReducerAuth = () => {

    const [authState, dispatch] = useReducer( authReducer, {}, init );

    const onLogin = ( user ) => {

        const action = {
            type: types.login,
            payload: {
                ...user
            }
        }

        dispatch( action );

    }

    const onLogout = ( msg = '' ) => {
        const action = {
            type: types.logout,
            payload: msg
        }

        dispatch( action );
    }

    const clearErrorMessage = () => {

        const action = {
            type: types.clearErrorMessage
        }

        dispatch( action );
    }


  return {
    authState,
    login: onLogin,
    logout: onLogout,
    clearErrorMessage
  }
}
