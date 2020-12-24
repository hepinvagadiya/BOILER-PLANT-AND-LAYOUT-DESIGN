import React, { Component } from 'react';
import { CardWrapper } from './cardWrapper'
import { UserData } from "../../../../../core/Array/arr";
import { Card, Avatar } from 'antd';

const { Meta } = Card;
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserData: UserData.users,
        };
    }

    render() {
        const { UserData } = this.state
        return (
            <CardWrapper>
                <div className="cardList">
                    <div className="cardHeader">
                        Cards
                    </div>
                    <div className="cardcontent">
                        {UserData.map((menu, index) => (
                            <Card
                                key={index}
                                className="card"
                                cover={<img alt="cover"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />}
                            >
                                <Meta
                                    avatar={<Avatar src="https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg" />}
                                    title={menu.name}
                                    description={menu.email}
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </CardWrapper>
        );
    }
}
export default Cards;