import { Navigate, Outlet } from 'react-router-dom'
import { useStore } from "../../zustand/store"

const Auth = () => {

    const { token } = useStore()

    return token ? <Outlet /> : <Navigate replace to={"/login"} />
}

export default Auth