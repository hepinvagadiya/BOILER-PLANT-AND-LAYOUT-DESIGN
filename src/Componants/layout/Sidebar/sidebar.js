import React, { Component } from "react";
import SidbarStyle from "./sidebarWrapper";
import { Link } from "react-router-dom";
import { Icons } from "../../modules/componants";
import { Menu, Tooltip } from 'antd';
import Cookies from 'js-cookie';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        var auth = JSON.parse(Cookies.get('mainData'))
        const { current } = this.props
        return (
            <SidbarStyle>
                <Menu
                    mode="inline"
                    selectedKeys={[current]}
                    style={{ height: '100%', borderRight: 0, backgroundColor: "transparent" }}
                    onClick={this.props.handleClick}
                >
                    {auth[1].SideMenu.map((menu, index) => (
                        <Menu.Item key={index}>
                            <Link to={{ pathname: "/" + auth[0].auth[0].option + "/" + menu.module, }} >
                                <Tooltip placement="rightBottom" title={menu.module}>
                                    <Icons type={menu.module} />
                                </Tooltip>
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </SidbarStyle>
        )
    }
}

export default Sidebar;
