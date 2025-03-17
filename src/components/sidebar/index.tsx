import React, { useState } from "react"
import { Layout, Menu, Flex, Space } from "antd"
import mainMenu from "./sidebarmenu"
import iconLogo from '@/assets/images/logo.svg'




const {Sider} = Layout


export default function SidebarComponent() { 
      const [collapsed, setCollapsed] = useState(false);

    return (
         <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Flex className="!mb-4 !mt-5" justify="center" align="center">
                    <img src={iconLogo} alt="logo"/> <h2 className={"ml-3 text-white text-xl font-bold " + (collapsed ? 'hidden' : '' )}>BIG </h2>
                </Flex>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={mainMenu} />
         </Sider>
    )
}