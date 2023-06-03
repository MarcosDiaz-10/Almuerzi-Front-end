import { useContext } from "react";
import { AlmuerziContext } from "../../context/AlmuerziContext";
import { useUiApi } from "../ui/useUiApi";
import almuerziApi from "../../api/almuerziApi";

export const useOrderApi = () => {

    const { orderStore, authStore, uiStore } = useContext( AlmuerziContext );

    const { authState } = authStore;
    const { orderState, onCreateOrder, onAddMeal, OnRemoveMeal, OnDeliveringOrder, OnDeliveredOrder} = orderStore;
    const {onLoading, onLoaded, setMessageMeal, clearErrorMessageMeal} = uiStore
  

    const handleCreateOrder = () => { 
        onCreateOrder( authState.user._id );
    };

    const handleAddMeal = (  meal_id, mealSelected ) => {
      onAddMeal( authState.user._id, meal_id, mealSelected );
    };

    const handleRemoveMeal = ( meal ) => {
      OnRemoveMeal( authState.user._id, meal );
    };

    const handleDeliveringOrder = async() => {
      clearErrorMessageMeal();
      onLoading();
      try {

        const { data } = await almuerziApi.post('/orders', { ...orderState.order });

        localStorage.setItem('order', data._id);
        
        onLoaded();
        OnDeliveringOrder();
      } catch (error) {
        console.log(error)
        onLoaded();
        setMessageMeal(error);
      }
    };

    const handleDeliveredOrder = async() => {
      clearErrorMessageMeal();
      onLoading();

      const idOrder = localStorage.getItem('order')

      try {

        const { data } = await almuerziApi.put(`/orders/${idOrder}`, { condition: false, date: orderState.order.date });

        
        onLoaded();
        OnDeliveredOrder();
      } catch (error) {
        console.log(error)
        onLoaded();
        setMessageMeal(error);
      }
    }; 


  return {
    orderState,
    handleCreateOrder,
    handleAddMeal,
    handleRemoveMeal,
    handleDeliveringOrder,
    handleDeliveredOrder
  }
}
