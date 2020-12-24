import React, { Component } from 'react';
import { PageWrapper } from "./Pagewrapper";
import { Layout, Spin } from 'antd';
import Topbar from '../layout/Topbar/topbar';
import Sidebar from '../layout/Sidebar/sidebar';
import PageRouter from './pageRouter'
import Cookies from 'js-cookie';

class Page extends Component {
    constructor() {
        super();
        this.state = {
            current: Cookies.get('current'),
            loading: true,
        }
    }
    handleClick = (e) => {
        this.setState({ current: e.key, });
        Cookies.set('current', e.key);
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ loading: false }); }, 1000);
    }
    render() {
        const { Header, Content, Sider, loading } = Layout;
        return (
            <PageWrapper>
                <Spin tip="Loading..." spinning={this.state.loading} size="large">
                    <Layout style={{ minHeight: '100vh' }}>
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <Topbar current={this.state.current} />
                        </Header>
                        <Layout className="site-layout">
                            <Sider className="site-layout-background">
                                <Sidebar handleClick={this.handleClick} current={this.state.current} />
                            </Sider>
                            <Content style={{ margin: '0 10px' }} loading={loading}>
                                <div className="site-layout-background pageLayout" style={{ padding: 15, minHeight: 360 }}>
                                    <PageRouter />
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Spin>
            </PageWrapper>
        );
    }
}

export default Page;