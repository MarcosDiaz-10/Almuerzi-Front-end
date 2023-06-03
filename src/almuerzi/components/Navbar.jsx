import { Link, NavLink } from "react-router-dom";
import { useAuthApi } from "../../hooks/auth/useAuthApi"
import { useOrderApi } from "../../hooks/order/useOrderApi";


export const Navbar = () => {

    const { authState, callLogout } = useAuthApi();    
    const { orderState } = useOrderApi();
    
    const { user } = authState;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <div className="navbar-brand">
            <img src='../../../assets/ImagenEditada.jpg' alt={  user.name } width="60" height="auto" style={{ borderRadius: '50px'}} className="d-inline-block align-text-top "/>
            <h6 className="p-1">{ user.name }</h6>
        </div>
        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/meals"
                >
                   <h4>Meals</h4> 
                </NavLink>

                {
                    ( orderState.stateOrder !== 'not-ordering' && orderState.order !== null) 
                        ? (
                            <NavLink 
                                className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                                to="/order"
                            >
                                <h4>Order</h4> 
                            </NavLink>
                        )
                        : null
                }



            </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
                <button
                    className="nav-item nav-link btn"
                    onClick={ callLogout }
                >
                    Logout
                </button>
            </ul>
        </div>
        </nav>
  )
}
