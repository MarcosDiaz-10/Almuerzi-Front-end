import { useContext } from "react";
import almuerziApi from "../../api/almuerziApi";
import { AlmuerziContext } from "../../context/AlmuerziContext";
import { useUiApi } from "../ui/useUiApi";

export const useAuthApi = () => {

  const { authStore } = useContext( AlmuerziContext );

  const { uiState, handleLoaded, handleLoading } = useUiApi();

  const { authState, login, logout, clearErrorMessage } = authStore;

    const onRegister = async({ name, email:mail, password }) => {
        clearErrorMessage();  
        handleLoading();
        try {

          const { data } = await almuerziApi.post( '/users', { name, mail, password, rol: 'USER_ROL'});
          
          handleLoaded();
          if ( !data?.ok ) return logout( data.msg ?? data.errors[0].msg ); ;

          const { _id, img, rol } = data.user;

          localStorage.setItem( 'token', data.token );

          login( { _id, name, mail, img, rol });


        } catch ( { response } ) {
          handleLoaded();
          logout( response.data.msg ?? response.data.errors[0].msg )

        }

    };

    const onLogin = async({ email, password}) => {
      clearErrorMessage();
      handleLoading();
      try {
        
        const { data } = await almuerziApi.post('/auth/login', { mail: email, password });
        handleLoaded();
        if( !data?.ok) return logout( data.msg ?? data.errors[0].msg );

        const { _id, name, img, rol } = data.user;

        localStorage.setItem( 'token', data.token );

        login({ _id, name, email, img, rol });

      } catch ({ response }) {
        handleLoaded();
        logout( response.data?.msg ?? response.data?.errors[0].msg )
        
      }
      
    };

    const onRenewJwt = async() => {

      try {
        const { data } = await almuerziApi.get('/auth');

        if( !data?.ok) return logout( data.msg ?? data.errors[0].msg );

        const { uid: _id, name, mail: email, img, rol } = data.user;
        localStorage.setItem( 'token', data?.token )

        login({ _id, name, email, img, rol})

      } catch ({ response }) {
        logout( response.data?.msg ?? response.data?.errors[0].msg )
      }

    };

    const clearMessage = () => {
      clearErrorMessage();
    };

    const callLogout = ( msg = '' ) => {

      localStorage.removeItem('token');

      logout( msg );
    };

  return {

   authState,
   onRegister,
   onLogin,
   onRenewJwt,
   clearMessage,
   callLogout
  
  }
}
