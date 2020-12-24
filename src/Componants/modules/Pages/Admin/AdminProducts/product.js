import React, { Component } from "react";
import { ProductWrapper } from "./productStyle";
import { UserData } from "../../../../../core/Array/arr";
import { Card, Spin, } from 'antd';

class productManagment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: UserData.product,
      toDo: UserData.todo,
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => { this.setState({ loading: false }); }, 1000);
  }
  render() {
    const { UserData, toDo, loading } = this.state
    return (
      <ProductWrapper>
        <div className="mainContent">
          {toDo.map((d, i) => (
            <div key={i} className="todocontent">
              <h5 className="heading"> {d.name} </h5>
              <div className="cardcontent">
                {UserData.map((menu, index) => (
                  <Spin spinning={loading}>
                    <Card key={index}>
                      Add Refresh interva with timefilter refresh the deshboard
                      and insident screen.
                    <div className="footer">
                        <div style={{ display: "flex" }}>
                          <div className="dot"></div>
                          <div style={{ color: "#2d84b3" }}>High</div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className="ekasha">Ekasha-197</div>
                          <div className="ekasha-child">R</div>
                        </div>
                      </div>
                    </Card>
                  </Spin>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ProductWrapper>
    );
  }
}
export default productManagment;
