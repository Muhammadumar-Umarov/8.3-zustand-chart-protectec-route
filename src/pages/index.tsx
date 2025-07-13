import { useRoutes } from "react-router-dom"
import Layout from "./layout/Layout"
import { lazy } from "react"
const Home = lazy(() => import("./home/Home"))
const Statistics = lazy(() => import("./statistics/Statistics"))
const Login = lazy(() => import("./login/Login"))
const Auth = lazy(() => import("./auth/Auth"))

const MainRouters = () => {
    return useRoutes([
        {
            path:"/",
            element: <Auth/>,
            children: [
                {
                    path: "/",
                    element: <Layout />,
                    children: [
                        { index: true, element: <Home /> },
                        { path: "/statistics", element: <Statistics /> }
                    ],
                },
            ]
        },
        {
            path: "/login",
            element: <Login/>
        }
    ])
}

export default MainRouters