import { useContext, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { AlmuerziPage } from "../almuerzi/pages/AlmuerziPage"
import { CreateUser } from "../auth/pages/CreateUser"
import { LoginPage } from "../auth/pages/LoginPage"
import { useAuthApi } from "../hooks/auth/useAuthApi"


export const AppRouter = () => {

    const { authState, onRenewJwt } = useAuthApi();

    useEffect(() => {
      
        onRenewJwt()

    }, [])
    

    const status = authState.status;

   

  return (
    <Routes >
        {
            ( status === 'not-authenticated')
                ? (
                    <>
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/new" element={<CreateUser/>}/>
                        <Route path="/*" element={<Navigate to="/login"/>}/>
                    </>
                )
                :(
                    <>
                    <Route path="/*" element={<AlmuerziPage/>}/>
                    </>
                )
        }
    </Routes>
  )
}
