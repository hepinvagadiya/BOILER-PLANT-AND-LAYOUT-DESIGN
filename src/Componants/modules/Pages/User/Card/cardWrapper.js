import styled from 'styled-components';

const CardWrapper = styled.div`
   .cardList{
    /* background-color: #0f2029; */
    border: 1px solid #1c4458;
    margin: 12px;
    padding: 12px;
    border-radius: 7px;

        .cardHeader{
            // background-color: #0f1315;
            font-size: 22px;
            padding: 5px;  
            border-bottom: 1px solid #05212f;
            display: flex;
            color: #009891;
        }
        .cardcontent{
            display: flex;
            flex-wrap: wrap;
            padding-top: 0px;
            max-height: 62vh;
            overflow: auto;
            justify-content: space-around;
            color: ${props => props.theme.bodyContent.pageContent.color};


            .ant-card-meta-title {
                color: ${props => props.theme.bodyContent.pageContent.color};
            }

            .ant-card-meta-description {
                color: ${props => props.theme.bodyContent.pageContent.color};
            }
            .card{
                background-color: #0d8ccc14;
                border: 1px solid #113e4ea8;
                padding: 11px;
                border-radius: 5px;
                width: 253px;
                margin: 25px;
                box-shadow: 7px 8px 5px rgb(0 0 0 / 37%);

                &:hover{
                    border-radius: 5px;
                    box-shadow: 0px 0px 0px rgb(0 0 0 / 37%);
                }

                .cardImage{
                    font-size: 3rem;
                    border: 1px solid #11597d;
                    background-color: #75bfd7a8;
                    padding: 0px 0px 0px 16px;
                    width: 27%;
                    border-radius: 10px;
                    margin: -16% 0px 0px 34%;

                    .anticon svg {
                        color: #041d2b !important;
                    }
                }
                .carduser{
                    text-align: center;
                    margin: 10px;
                    color: ${props => props.theme.bodyContent.pageContent.color};
                }
                // hr{
                //     border: 0.1px solid #2d84b3;
                //     width: 69%;
                // }
                .cardfooter{
                    // background-color: #7bc6dc;
                    border: 1px solid #041d2b;
                    padding: 5px;
                    border-radius: 5px;
                    margin-top: 16px;
                    display: flex;
                }
                .leftdtl{
                    .email{
                        padding: 6px;
                    }
                    .phone{
                        padding: 6px;
                    }
                    .active{
                        padding: 6px;
                    }
                }
                .rightdtl{
                    padding-left: 32px;
                    .rtemail{
                        padding: 6px;
                    }
                    .rtnum{
                        padding: 6px;
                    }
                    .rtactive{
                        padding: 6px;
                    }
                }

            }
        }
   }
`;

export { CardWrapper };
