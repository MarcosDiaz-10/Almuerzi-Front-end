
import { useReducerAuth } from "../hooks/auth/useReducerAuth"
import { useReducerOrder } from "../hooks/order/useReducerOrder";
import { useReducerUi } from "../hooks/ui/useReducerUi";
import { AlmuerziContext } from "./AlmuerziContext"

export const AlmuerziProvider = ({children}) => {

    const { authState, login, logout, clearErrorMessage } = useReducerAuth();
    const { uiState, onLoadMeals, onLoading, onSetActiveMeal, onLoaded, setMessageMeal, clearErrorMessageMeal } = useReducerUi();
    const { orderState, onCreateOrder, onAddMeal, OnRemoveMeal, OnDeliveringOrder, OnDeliveredOrder } = useReducerOrder();

  return (
    <AlmuerziContext.Provider value={{
    authStore: { 
      authState,
      login,
      logout,
      clearErrorMessage 
    }, 
    uiStore: { 
      uiState,
      onLoadMeals,
      onLoading,
      onSetActiveMeal,
      onLoaded,
      setMessageMeal,
      clearErrorMessageMeal 
    },
    orderStore: {
      orderState,
      onCreateOrder,
      onAddMeal,
      OnRemoveMeal,
      OnDeliveringOrder,
      OnDeliveredOrder
    }
    }}>{ children }</AlmuerziContext.Provider>
  )
}
