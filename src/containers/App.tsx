import React from "react"
import LoginPage from "./login/Login"
import Routes from "@/routes"
import {Flex} from "antd"

const conStyle : React.CSSProperties = {
    height: "100vh",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto"
}

export default function App() { 
    return (
        // <Flex style={conStyle} justify="center" align="middle" vertical>
        //     <h1 style={{textAlign:'center'}}>Login</h1>
        //     <LoginPage/>
        // </Flex>
        <><Routes/></>
    )
}