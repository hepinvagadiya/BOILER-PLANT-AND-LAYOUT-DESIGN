import React, { Component } from 'react';
import { AccWrapper } from './AccHandlingStyle'
import { UserData, columns } from "../../../../../core/Array/arr";
import { Table } from 'antd';


class AccHandling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserData: UserData.usersAcc,
            selectedRowKeys: [],
        };
    }

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    render() {
        const {  selectedRowKeys, UserData } = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <AccWrapper>
                <div className="user">Account Handling</div>
                <div className="containerFluid userList">
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={UserData}
                    />
                </div>
            </AccWrapper>
        );
    }
}
export default AccHandling;