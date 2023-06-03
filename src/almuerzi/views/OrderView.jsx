import { useMemo } from "react";
import { useOrderApi } from "../../hooks/order/useOrderApi";
import { useUiApi } from "../../hooks/ui/useUiApi";
import { MealsList } from "../components/MealsList"
import { useNavigate } from "react-router-dom";


export const OrderView = () => {

  const navigate = useNavigate()

  const { orderState, handleRemoveMeal, handleDeliveredOrder, handleDeliveringOrder } = useOrderApi();
  const { uiState } = useUiApi();

  

  const isMealSelected = useMemo( () => {
      return orderState.mealSelected.some( ( meal ) => {
          return meal?._id === uiState.activeMeal?._id
      })
  },[ orderState, uiState])


  const onClickRemoveMeal = () => {

    handleRemoveMeal( uiState.activeMeal )

  };

  const onClickAddOrder = () => {
    handleDeliveringOrder()
  }

  const onClickDeliveredOrder = () => {
    handleDeliveredOrder()
    navigate('/', {replace: true})
  }



  return (
    <div className="container text-center">
      <div className="container">
        <MealsList arrayMeals={ orderState.mealSelected }/>
      </div>
      {
        (isMealSelected)
          ?       <button className="btn btn-dark p-3" style={{ marginTop:'50px', marginRight:'50px', borderRadius: '25px', boxShadow: '2px 2px 10px black'}} onClick={ onClickRemoveMeal }> <h4>Eliminar Plato</h4></button>
          : null
      }

      {
            (orderState.stateOrder !== 'delivering' )
            ? <button className="btn btn-dark p-3" style={{ marginTop:'50px', marginRight:'50px', borderRadius: '25px', boxShadow: '2px 2px 10px black'}} onClick={ onClickAddOrder } disabled={ uiState.isLoading }> <h4>Pedir la orden</h4></button>
            : null
              
      }
      {
            (orderState.stateOrder !== 'delivered' )
            ? <button  className="btn btn-dark p-3" style={{  marginTop:'50px', borderRadius: '25px', boxShadow: '2px 2px 10px black'}} onClick={onClickDeliveredOrder}><h4>Entregado</h4></button>
            : null
              
      }

      
    </div>

    
  )
}
