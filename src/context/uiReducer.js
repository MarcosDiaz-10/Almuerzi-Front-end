import { types } from "../auth/types";


export const uiReducer = ( state, { type, payload } ) => {
    
    switch ( type) {
        case types.loadMeals:
        return {
            ...state,
            activeMeal: null,
            meals: [ ...payload ],
            isLoading: false
        };    
        case types.setActiveMeal:
        return {
            ...state,
            activeMeal:{ ...payload },
            isLoading: false 
        };
        case types.loading:
        return {
            ...state,
            isLoading: true, 
        };
        case types.changeView:
        return {
            ...state,
            activeView: payload, 
        };
        case types.loaded: 
        return {
            ...state, 
            isLoading: false
        };        
        case types.setMessage: 
        return {
            ...state, 
            msg: payload 
        };
        
        default: return {...state, activeMeal: { payload }}
    }

};