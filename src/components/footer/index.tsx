import React from "react"
import {Layout} from "antd"
const {Footer} = Layout

export default function FooterComponent() { 
    return ( 
        <Footer style={{ textAlign: 'center' }}>
          Satu Sawit ©{new Date().getFullYear()} Created by PT Bina Inovasi Global
        </Footer>
    )
}