import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { useAuthApi } from '../../hooks/auth/useAuthApi';
import { useErrorMessage } from '../../hooks/auth/useErrorMessage';
import { useForm } from '../../hooks/useForm'
import { errorForm } from '../../helpers/errorMessage';
import { formRegisterValidators } from '../../helpers/formValidators'

import { styleAuth } from '../styleText/styles';
import './CreateUser.css';


export const CreateUser = () => {
  document.body.style = styleAuth

  const navigate = useNavigate();

  const { authState, onRegister, clearMessage, callLogout } = useAuthApi();
  const { name, email, password, nameValid, emailValid, passwordValid, formValidation, onInputChange } = useForm({ email: '', password: '', name: ''}, formRegisterValidators )
  const { displayErrorMessage, formSubmitted, setFormSubmittedTrue } = useErrorMessage( formValidation, authState, clearMessage)

  const onNavigateLogin = () => {
    navigate( '/login', { replace: true });
  }

  useEffect(() => {
    
    clearMessage();

  }, []);



  const onSubmit = ( e ) => {
    e.preventDefault();

    setFormSubmittedTrue(); 

    
    if( nameValid !== null) {
        callLogout( nameValid )
        return true
    };
    if( emailValid !== null) {
        callLogout( emailValid )
        return true
    };
    if( passwordValid !== null){
        callLogout( passwordValid )
        return true
    };
 

    onRegister({ name: name.trim(), email: email.trim(), password: password.trim() });

    

  }

  return (
    <div className="backgroundLogin p-1 "  >
      <button className="btn btn-dark btn-login-position mt-2 ms-2" onClick={onNavigateLogin }>
        <i className="bi bi-box-arrow-left"> Login</i>
      </button>
    <div className="container-sm  p-3 login-container">
      <div className="row bg-blue p-1">
        <h1 className="text-center">Crear Usuario</h1>
        <div className="col">
          <form className="mt-3 form-login" onSubmit={ onSubmit }>
            <div className="input-group mb-2 ">
            <div className="input-group mt-2">
              <span className={ ( errorForm( formSubmitted, nameValid ) && displayErrorMessage ) ? "input-group-text" : "input-group-text border-color-red"}>Name</span>
              <input 
                type="text" 
                className={  ( errorForm( formSubmitted, nameValid ) && displayErrorMessage )  ? "form-control input-login " : "form-control input-login border-color-red"} 
                placeholder="Nombre"
                name='name' 
                value={ name }
                onChange={ onInputChange } 
              />
            </div>
            <div className="input-group mt-2">
              <span className={ ( errorForm( formSubmitted, emailValid ) && displayErrorMessage ) ? "input-group-text" : "input-group-text border-color-red"} >Email</span>
              <input 
                type="email" 
                className={ ( errorForm( formSubmitted, emailValid ) && displayErrorMessage )  ? "form-control input-login " : "form-control input-login border-color-red"} 
                placeholder="name@example.com"
                name='email' 
                value={ email }
                onChange={ onInputChange }  
              />
            </div>
            <div className="input-group mt-2 ">
              <span className={ ( errorForm( formSubmitted, passwordValid ) && displayErrorMessage ) ? "input-group-text" : "input-group-text border-color-red"} >Password</span>
              <input 
                type="password" 
                className={ ( errorForm( formSubmitted, passwordValid ) && displayErrorMessage )  ? "form-control input-login " : "form-control input-login border-color-red"}  
                placeholder="Password"
                name='password' 
                value={ password }
                onChange={ onInputChange }  
              />
            </div>
            {
              ( !displayErrorMessage ) 
                ? <div className=' color-text-error mt-1'>{ authState.msg }</div>
                : null
            }
            </div>
            <div>
              <button type="submit" className="btn btn-outline-dark btn-login mt-1">
                Crear Usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
