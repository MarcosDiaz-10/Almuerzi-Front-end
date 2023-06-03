import { useContext } from "react"
import { AlmuerziContext } from "../../context/AlmuerziContext";
import almuerziApi from "../../api/almuerziApi";


export const useUiApi = () => {

  const { uiStore } = useContext( AlmuerziContext );


  const { uiState, onLoadMeals, onLoading, onSetActiveMeal, onLoaded, setMessageMeal, clearErrorMessageMeal } = uiStore;

  const handleSetActiveMeal = ( meal ) => {
    onSetActiveMeal( meal );
  };

  const handleLoaded = () => {
    onLoaded();
  }

  const handleLoading = () => {
    onLoading();
  };

  const handleLoadMeals = async() => {
    clearErrorMessageMeal();
    onLoading();

    try {
      
      const { data } = await almuerziApi.get('/meals');


      handleLoaded();
      if( !data.ok) return setMessageMeal( response.data.msg ?? response.data.errors[0].msg );

      onLoadMeals( data.meals );

    } catch ({ response }) {
      handleLoaded();
      setMessageMeal( response.data.msg ?? response.data.errors[0].msg );
    }


  };

  const handleSetErrorMeal = ( error ) => {
    setMessageMeal(error)
  }

  const handleCleanErrorMeal = () => {
    clearErrorMessageMeal()
  }


  return {
    uiState,
    handleSetActiveMeal,
    handleLoaded,
    handleLoading,
    handleLoadMeals,
    handleCleanErrorMeal,
    handleSetErrorMeal
  }
}
