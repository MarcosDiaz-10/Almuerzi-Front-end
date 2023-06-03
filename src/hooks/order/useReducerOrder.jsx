import { useReducer } from "react"
import { orderReducer } from "../../context/orderReducer"
import { types } from "../../auth/types";

const init = () => {
    return {
        stateOrder: 'not-ordering', // 'ordering', 'delivering', 'delivered'
        order: null,
        mealSelected: []
    }
};


export const useReducerOrder = () => {

    const [ orderState, dispatch] = useReducer( orderReducer, {}, init );

    const onCreateOrder = ( user_id ) => {

        const action = {
            type: types.createOrder,
            payload: {
                user_id,
                date: new Date()
            }
        };

        dispatch( action );


    };

    const onAddMeal = ( user_id, meal_id, mealSelected ) => {


        const action = {
            type: types.addMeal,
            payload: {
                user_id,
                date: new Date(),
                meal_id,
                mealSelected
            }
        };

        dispatch(action);

    };


    const OnRemoveMeal = ( user_id, meal ) => {

        const action = {
            type: types.removeMeal,
            payload: {
                user_id,
                date: new Date(),
                meal
            }
        };

        dispatch(action);


    }

    const OnDeliveringOrder = () => {

        const action = {
            type: types.deliveringOrder,
            payload: {}
        };

        dispatch(action);


    }

    const OnDeliveredOrder = () => {

        const action = {
            type: types.deliveredOrder,
            payload: {}
        };

        dispatch(action);


    }


  return {
    orderState,
    onCreateOrder,
    onAddMeal,
    OnRemoveMeal,
    OnDeliveringOrder,
    OnDeliveredOrder,
  }
}
