import { MealCard } from "./MealCard"


export const MealsList = ( { arrayMeals } ) => {
  return (

    <div className="row rows-cols-1 row-cols-md-3 g-3 p-3"  >
        {
            arrayMeals.map( meal => <MealCard key={ meal._id} { ...meal }/> )
        }
    </div>

       
  )
}
