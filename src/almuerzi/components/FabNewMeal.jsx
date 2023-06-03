import { useState } from "react";
import { useAuthApi } from "../../hooks/auth/useAuthApi";
import { useOrderApi } from "../../hooks/order/useOrderApi"


export const FabNewMeal = () => {
  const [onClickButton, setOnClickButton] = useState( false );
  const { authState } = useAuthApi();
  const { handleCreateOrder } = useOrderApi();

  const { user } = authState;

  const onClick = () => {
    setOnClickButton( true );
    handleCreateOrder( user._id );
    setOnClickButton( false );
  }

  return (
    <button className="btn btn-dark fab" onClick={ onClick } disabled={ onClickButton }>
     <i className="bi bi-plus"></i>
    </button> 
  )
}
