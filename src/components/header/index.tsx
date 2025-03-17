import React from "react";
import { Layout, theme, Dropdown, Space, Avatar } from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons"
import {profileMenu} from './header-menu'

const {Header } = Layout;

export default function HeaderComponent() { 
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
    return (
        <Header  className="flex  px-5" style={{ background: colorBgContainer }}>
            <Dropdown className="ml-auto" trigger={['click']} menu={{items: profileMenu}}>
                 <Space><Avatar size="default" icon={<UserOutlined/>}/> Agung Hapsa <DownOutlined/></Space>
            </Dropdown>
        </Header>
    )
}