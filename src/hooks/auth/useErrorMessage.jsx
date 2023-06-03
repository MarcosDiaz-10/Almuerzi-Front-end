import { useEffect, useMemo, useState } from "react";


export const useErrorMessage = ( formValidation, state, clearMessage ) => {
  
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
    
        setFormSubmitted(false);
        clearMessage();
       
      }, [formValidation])


  
    const displayErrorMessage = useMemo(() => {

    
        return ( formSubmitted && state.msg !== '') 
          ? false
          : true
    
    
    }, [formSubmitted, state.msg])
      
  
    const setFormSubmittedTrue = () => {
        setFormSubmitted( true );
    }
  
  
    return {
    displayErrorMessage,
    formSubmitted,
    setFormSubmittedTrue
    
  }
}
