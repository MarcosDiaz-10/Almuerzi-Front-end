import {types} from '../auth/types/types.js'


export const orderReducer = ( state, { type, payload }) => {

    switch ( type ) {
        case types.createOrder :
            return {
                stateOrder: 'ordering',
                order: {
                    meals_id: [],
                    user_id: payload.user_id,
                    date: payload.date
                },
                mealSelected: []
            };
        case types.addMeal:
            return {
                ...state,
                order: {
                    meals_id: [ ...state.order.meals_id , payload.meal_id ],
                    user_id: payload.user_id,
                    date: payload.date
                },
                mealSelected: [ ...state.mealSelected, payload.mealSelected ]
            };

        case types.removeMeal: 
            return {
                ...state,
                order: {
                    meals_id: state.order.meals_id.filter( meal => meal !== payload.meal._id),
                    user_id: payload.user_id,
                    date: payload.date
                },
                mealSelected: state.mealSelected.filter( meal => meal._id !== payload.meal._id)
            };
        case types.deliveringOrder: 
            return {
                ...state,
                stateOrder: 'delivering'
            };
        case types.deliveredOrder: 
            return {
                stateOrder: 'delivered',
                order: null,
                mealSelected: []
            };

        default:
            return state;
    }

}