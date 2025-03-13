import React from "react";
import {Routes, Route} from "react-router"
import {ProtectedRoute, PublicRoute} from "./routers"



export default function RoutesGenerator() { 
    return ( 
        <Routes>
            {PublicRoute.map((route, idx) => (
                <Route key={idx} path={route.path}  element={<route.container/>} />
            ))}
            {ProtectedRoute.map((route, idx) => (
                <Route key={idx} path={route.path} element={<route.container/>} />
            ))}
        </Routes>
    )
}