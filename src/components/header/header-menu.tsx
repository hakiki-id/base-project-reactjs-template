import React from "react"
import type {MenuProps} from "antd"
import {LogoutOutlined} from "@ant-design/icons"
import {Link} from "react-router"

export const profileMenu : MenuProps['items'] = [{
    label: "Profile", 
    key: "0"
}, 
{
    label: "Change Password", 
    key: "1"
}, 
{
    label: "Configuration", 
    key: "2"
}, 
{
    type: "divider"
},
{
    label: (<Link to="/"><LogoutOutlined/> Logout</Link>),   key: "3"
}]