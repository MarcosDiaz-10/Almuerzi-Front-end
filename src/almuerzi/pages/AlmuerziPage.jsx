import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'



import './AlmuerziPage.css'
import { OrderView } from '../views/OrderView'
import { HomeView } from '../views/HomeView'
import { FabNewMeal } from '../components/FabNewMeal'
import { useOrderApi } from '../../hooks/order/useOrderApi'


export const AlmuerziPage = () => {
  document.body.style = 'background-color: white'

  const { orderState } = useOrderApi();


  return (
    <>
      <Navbar/>

      <div className='container'>
        <Routes>

          <Route path='meals' element={ <HomeView/>}/>
          <Route path='order' element={ <OrderView/>}/>
          <Route path='/*' element={ <Navigate to="meals"/>}/>


        </Routes>
      </div>
      {
        ( orderState.stateOrder === 'not-ordering')
          ? <FabNewMeal/>
          : null 
        
      }
      
    </>

  ) 
}
