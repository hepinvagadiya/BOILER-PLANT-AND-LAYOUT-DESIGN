import React, { Component } from 'react';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import SignInWrapper from './signInStyle';
import { Radio, Input, Button, notification } from 'antd';
import Cookies from 'js-cookie';
import { details } from '../../../../core/Array/arr'


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false,
            submit: false,
            defalt: [],
            allFields: [{ email: "", password: "", option: "" }],
            
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ animate: true });
        }, 600);
        Cookies.set('current', 0);

    }
    change = (e) => {
        const { allFields } = this.state
        const { name, value } = e.target;
        allFields[0][name] = value;
        this.setState({ allFields });
    }
    submit = () => {
        const { allFields } = this.state
        if (allFields[0].email !== "" && allFields[0].password !== "" && allFields[0].option !== "") {
            const mainData = allFields[0].option === "Admin" ? details.admin : details.user
            if (JSON.stringify(mainData[0].auth) === JSON.stringify(allFields)) {
                Cookies.set('mainData', mainData)
                window.location.replace('/' + mainData[0].auth[0].option + '/' + mainData[1].SideMenu[0].module)
            } else {
                notification.info({ message: `username & password`, description: 'Username & Password is wrong.' });
                setTimeout(() => { window.location.replace("/"); }, 1000);
            }
        } else {
            this.setState({ submit: true })
        }
    }
    render() {
        const { animate, submit, allFields } = this.state;
        return (
            <SignInWrapper >
                <div className={animate ? "signInContent animate" : "signInContent"}>
                    <UserOutlined className="site-form-item-icon let" />
                    <div className="login">Login to your account</div>
                    <div className="inputs">
                        <Input
                            name="email"
                            autoComplete="off"
                            size="large"
                            onChange={(e) => this.change(e)}
                            style={{ width: '90%', color: '#00bbbb' }}
                            placeholder="Username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                        {submit === true && !allFields[0].email && <span style={{ fontSize: "12px", color: "#b90000" }}>username is required</span>}
                    </div>
                    <div className="inputs">
                        <Input.Password
                            name="password"
                            size="large"
                            onChange={(e) => this.change(e)}
                            style={{ width: '90%', color: '#00bbbb' }}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                        />
                        {submit === true && !allFields[0].password && <span style={{ fontSize: "12px", color: "#b90000" }}>password is required</span>}
                    </div>
                    <div className="inputs usertype">
                        <div>User type :&nbsp;&nbsp;
                            <Radio.Group name="option" onChange={(e) => this.change(e)}>
                                <Radio value="User" style={{ color: "rgb(2 96 111 / 58%)" }}>User</Radio>
                                <Radio value="Admin" style={{ color: "rgb(2 96 111 / 58%)" }}>Admin</Radio>
                            </Radio.Group><br></br>
                            {submit === true && !allFields[0].option && <span style={{ fontSize: "12px", color: "#b90000" }}>select any 1 of this</span>}
                        </div>
                    </div>
                    <div className="inputs button">
                        <Button type="primary" onClick={() => this.submit()}>
                            Login
                        </Button>
                    </div>
                </div>
            </SignInWrapper>
        );
    }
}

export default SignIn;