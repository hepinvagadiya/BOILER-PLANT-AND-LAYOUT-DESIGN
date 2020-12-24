import React, { Component } from 'react';
import { Button } from 'antd';
import {Authorize} from './authorizeWrapp'

class authoRize extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    backTo = () => {
        window.history.go(-1)
    }
    render() {
        return (
            <Authorize>
                <div>
                    <h1 style={{textAlign: "center",fontSize: "6rem",color: "white"}}>Sorry!</h1>
                    <code style={{ marginLeft: "44%",color: "red" }}>you have not Authorize to do This</code>
                </div>
                <Button className="backto" onClick={this.backTo}>
                    Back To Page
                </Button>
            </Authorize>
        );
    }
}

export default authoRize;