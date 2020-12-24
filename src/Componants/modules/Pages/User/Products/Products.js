import React, { Component } from 'react';
import Icons from '../../../componants/icons/icon';
import { ProductWrapper } from './productWrapper'
import { UserData } from "../../../../../core/Array/arr";
import { Card } from 'antd';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserData: UserData.productcard,
        };
    }

    render() {
        const { UserData } = this.state
        return (
            <ProductWrapper>
                <div className="cardList">
                    <div className="cardHeader">
                        {/* Products */}
                    </div>
                    <div className="cardcontent">
                        {UserData.map((menu, index) => (
                            <Card
                                key={index}
                                className="card"
                                cover={<div className="cardImage">
                                    <Icons type={menu.name} />
                                </div>}
                            >
                                <div className="cardfooter">{menu.name} :</div>
                                <div className="cardfooterdtl">Threat-iTM is a threat intelligence platform that empowers threat analysis to perform faster & better</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}
export default Products;