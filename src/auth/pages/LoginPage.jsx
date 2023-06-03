import { useNavigate } from "react-router-dom";


import { useAuthApi } from "../../hooks/auth/useAuthApi";
import { useErrorMessage } from "../../hooks/auth/useErrorMessage";
import { useForm } from '../../hooks/useForm'

import { styleAuth } from '../styleText/styles';
import './LoginPage.css';
import { formLoginValidators } from "../../helpers/formValidators";
import { useEffect, useState } from "react";
import { errorForm } from "../../helpers/errorMessage";
import { useUiApi } from "../../hooks/ui/useUiApi";


 
export const LoginPage = () => {
  document.body.style = styleAuth

  const { uiState,   } = useUiApi();
  const { authState, onLogin, clearMessage, callLogout } = useAuthApi();

  const { email, password, emailValid, passwordValid, formValidation, onInputChange } = useForm({ email: '', password: '' }, formLoginValidators)
  const { displayErrorMessage, formSubmitted, setFormSubmittedTrue } = useErrorMessage(  formValidation, authState, clearMessage )

  useEffect(() => {
    
    clearMessage();

  }, []);


  const navigate = useNavigate();

  const onNewUser = () => {
    navigate( '/new', {replace: true});
  }


  const onSubmit = (e) => {
    e.preventDefault();
    
    setFormSubmittedTrue();

    const user = { email: email?.trim(), password: password?.trim() };
 
    if( emailValid !== null) {
      callLogout( emailValid )
      return true
    };
    if( passwordValid !== null){
      callLogout( passwordValid )
      return true
    };

    onLogin( user );

  };

  return (
    <div className="backgroundLogin p-1 " >
      <div className="container-sm  p-3 login-container">
        <div className="row bg-blue p-1">
          <h1 className="text-center">Almuerzi</h1>
          <div className="col">
            <form className="mt-3 form-login" onSubmit={ onSubmit } >
              <div className="input-group mb-2 ">
                <span className={ ( errorForm( formSubmitted, emailValid ) && displayErrorMessage ) ? "input-group-text" : "input-group-text border-color-red" } >Email</span>
                <input 
                    type="email"
                    className={ (errorForm( formSubmitted, emailValid ) && displayErrorMessage )  ? "form-control input-login " : "form-control input-login border-color-red" }
                    placeholder="name@example.com" 
                    name='email' 
                    value={ email }
                    onChange={ onInputChange }
                  />
              </div>
              <div className="input-group mb-2 ">
                <span className={( errorForm( formSubmitted, passwordValid ) && displayErrorMessage ) ? "input-group-text" : "input-group-text border-color-red"} >Password</span>
                <input 
                  type="password"
                  className={ ( errorForm( formSubmitted, emailValid ) && displayErrorMessage )  ? "form-control input-login " : "form-control input-login border-color-red" }
                  placeholder="1234567" 
                  name='password' 
                  value={ password  }
                  onChange={ onInputChange }
                />
              </div>
              {
              ( !displayErrorMessage ) 
                ? <div className=' color-text-error mt-1'>{ authState.msg }</div>
                : null
            }
              <div>
                <button className="btn btn-outline-dark btn-login mt-1" disabled={ uiState.isLoading }>
                  Login
                </button>
              </div>
            </form>
            <button className="btn btn-outline-dark btn-new-user mt-3" onClick={ onNewUser }>
              Crear Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
