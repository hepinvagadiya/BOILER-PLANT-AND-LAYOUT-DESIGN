import React, { Component } from 'react';
import "./userWrapper.css";
import { LogoutOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { Tooltip } from 'antd';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logout = () => {
        Cookies.remove('mainData')
        window.location.replace("/");
    }
    render() {
        var auth = JSON.parse(Cookies.get('mainData'))
        return (
            <div style={{display: "flex"}}>
                <Tooltip placement="left" title="LogOut">
                    <div className="Pic" onClick={this.logout}>{auth[0].auth[0].option} <LogoutOutlined /></div>
                </Tooltip>
            </div>
        )
    }
}

export default User;