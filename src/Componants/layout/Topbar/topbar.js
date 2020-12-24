import React, { Component } from 'react';
import { TopbarWrapper } from './topbarWapper';
// import User from './user'
import { Switch, PageHeader, Button, Modal, DatePicker } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setVisible: false,
            setConfirmLoading: false,
        };
    }
    onChange = (checked) => {
        localStorage.setItem('theme', checked ? "dark" : "light")
        window.location.reload();
    }
    showModal = () => {
        this.setState({ setVisible: true });
    };
    handleOk = () => {
        this.setState({ setConfirmLoading: true })
        setTimeout(() => {
            Cookies.remove('mainData')
            window.location.replace("/");
            this.setState({ setVisible: false });
            this.setState({ setConfirmLoading: false })
        }, 2000);
    };
    handleCancel = () => {
        this.setState({ setVisible: false });
    };
    render() {
        const { setVisible, setConfirmLoading } = this.state
        var auth = JSON.parse(Cookies.get('mainData'))
        let getbrd = auth[1].SideMenu[this.props.current].module

        return (
            <TopbarWrapper>
                <PageHeader
                    className="site-page-header"
                    title="ekasha"
                    subTitle={getbrd}
                    extra={[
                        <div className="date">
                            <DatePicker
                                showTime={true}
                            />
                        </div>,
                        <div className="switch">
                            <Switch
                                key="2"
                                checked={localStorage.getItem('theme') === "light" ? false : true}
                                onChange={this.onChange}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                        </div>,
                        <div className="user">
                            <Button key="1" className="Pic" onClick={this.showModal} >{auth[0].auth[0].option} <LogoutOutlined /></Button>
                        </div>,
                        <Modal
                            title="Logout"
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            visible={setVisible}
                            confirmLoading={setConfirmLoading}
                        >
                            <p>Are you sure you want to logout?</p>
                        </Modal>
                    ]}
                />
            </TopbarWrapper>
        );
    }
}

export default Topbar;