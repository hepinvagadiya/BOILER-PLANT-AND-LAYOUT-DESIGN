import React, { Component } from 'react';
import { Notfound } from "./NotfoundWrapper";
import { Button } from 'antd';

class notFound extends Component {
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
            <Notfound>
                <div>
                    <h1 className="notfound"><code style={{ color: "#2a92c5" }}>404</code></h1>
                    <code style={{ marginLeft: "40%", color: "white" }}>Sorry, the page you are looking for could not be found</code>
                </div>
                <Button className="backto" onClick={this.backTo}>
                    Back To Page
                </Button>
            </Notfound>
        );
    }
}

export default notFound;