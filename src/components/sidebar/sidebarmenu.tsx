import React from 'react';
import type {MenuProps} from 'antd'
type MenuItem = Required<MenuProps>['items'][number]
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}


const mainMenu: MenuItem[] = [
    getItem('Dashboard', '1', <DesktopOutlined />),
    getItem('Sub Menu', '2', <FileOutlined />),
    getItem('Sub Menu 2', '3', <TeamOutlined />, [
        getItem('Sub Menu 2.1', '3.1', <UserOutlined />),
        getItem('Sub Menu 2.2', '3.2', <PieChartOutlined />)]),
    getItem('Sub Menu 3', '4', <TeamOutlined />),
]


export default mainMenu
