import { useEffect } from "react";
import { useUiApi } from "../../hooks/ui/useUiApi"
import { MealsList } from "../components/MealsList"


export const HomeView = () => {


  const { uiState, handleLoadMeals } = useUiApi();

  useEffect(() => {
    
    handleLoadMeals();
  
  }, [])
  


  return (
    <div className="container text-center">
      <MealsList arrayMeals={ uiState.meals }/>
      
    </div>
  )
}
