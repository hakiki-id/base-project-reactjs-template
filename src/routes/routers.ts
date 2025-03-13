import react from "react"
import Dashboard from "@/containers/dashboard"
import Login from "@/containers/login/Login"

type RouteBinding = { 
    path: string, 
    container: react.FC,
}




export const ProtectedRoute : RouteBinding[] = 
[
    {path: "/dashboard", container: Dashboard},
]
export const PublicRoute : RouteBinding[] =
[{path: "/", container: Login},
]
