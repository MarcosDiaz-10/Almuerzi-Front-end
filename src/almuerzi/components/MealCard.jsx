import { useMemo } from "react";
import { useOrderApi } from "../../hooks/order/useOrderApi";
import { useUiApi } from "../../hooks/ui/useUiApi"


export const MealCard = ({ _id, name, desc, img }) => {

    const { orderState, handleAddMeal } = useOrderApi();
    const { uiState, handleSetActiveMeal  } = useUiApi();

    const isActiveMeal = useMemo(() => {
        return (uiState.activeMeal && uiState.activeMeal._id === _id)
            ? true
            : false
    }, [ uiState, _id]);

    const isMealSelected = useMemo( () => {
        return orderState.mealSelected.some( ( meal ) => {
            return meal?._id === uiState.activeMeal?._id
        })
    },[ orderState, uiState])

    const onClickMeal = () => {
        handleSetActiveMeal({ _id, name, desc, img });
    };

    const onClickOrder = () => {

        handleAddMeal( _id, uiState.activeMeal)
    };

  return (
    <div className="col card-hover" key={ _id } onClick={ onClickMeal }>
        <div className="card " style={{ borderRadius:'20px'}} >
            <img src={ img } style={{ borderRadius:'20px'}} />
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ desc }</p>
                {
                    ( isActiveMeal && !isMealSelected ) 
                        ? <button className="btn btn-dark" onClick={ onClickOrder } disabled={orderState.stateOrder === 'not-ordering'} >Pedir</button>
                        : null 
                }
                {
                    ( isActiveMeal && isMealSelected  ) 
                        ? <div style={{ color: 'red'}}><h6>Ya fue seleccionada</h6></div>
                        : null
                }
            </div>
        </div>
    </div>
  )
}
