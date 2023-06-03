import { useReducer } from "react"
import { uiReducer } from "../../context/uiReducer"
import { types } from "../../auth/types"

const init = () => {
    return {
        isLoading: false,
        meals: [],
        activeMeal: null,
        msg: ''
        
    }
}

export const useReducerUi = () => {

    const [ uiState, dispatch] = useReducer( uiReducer, {}, init);

    const onLoadMeals = ( meals = [] ) => {

        const action = {
            type: types.loadMeals,
            payload: [ ...meals ]
        }

        dispatch( action );
    };

    const onSetActiveMeal = ( activeMeal ) => {


        const action = {
            type: types.setActiveMeal,
            payload: { ...activeMeal }
        }

        dispatch( action );

    };

    const onLoading = () => {

        const action = {
            type: types.loading,
            payload: ''
        }

        dispatch( action );

    };

    const onLoaded = () => {
        const action = {
            type: types.loaded,
            payload: ''
        }

        dispatch( action );

    };

    const setMessageMeal = ( msg ) => {

        const action = {
            type: types.setMessage,
            payload: msg
        }

        dispatch( action );
    }

    const clearErrorMessageMeal = () => {

        const action = {
            type: types.clearErrorMessage,
            payload: ''
        }

        dispatch( action );
    }





  return {
    uiState,
    onLoadMeals,
    onSetActiveMeal,
    onLoading,
    onLoaded,
    setMessageMeal,
    clearErrorMessageMeal
  }
}
