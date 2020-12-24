import styled from 'styled-components';

const ProductWrapper = styled.div`
.cardList{
    border: 1px solid #013652;
    margin: 12px;
    padding: 13px;
    border-radius: 7px;

    .cardHeader{
        padding: 5px;
        border-bottom: 1px solid #00436575;
        color: #009891;
    }
    .cardcontent{
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
        max-height: 78vh;
        overflow: auto;

        .ant-card {
            color: rgba(0, 0, 0, 0.85);
            background: transparent;
        }
        .ant-card-body {
            padding: 1px;
        }
        .card{
            border: 1px solid #004365ba;
            padding: 23px;
            border-radius: 5px;
            width: 230px;
            margin-left: 20px;
            margin-top: 5px;
            box-shadow: 8px 6px 5px rgb(0 0 0 / 37%);

            &:hover{
                // background-color: #004365ba;
                border-radius: 5px;
                margin-top: 5px;
                box-shadow: 0px 0px 0px rgb(0 0 0 / 37%);
            }

            .cardImage{
                background-color:  ${props => props.theme.bodyContent.pageContent.productcard.bgcolor};
                border-radius: 3px;
                padding: 27px 4px 27px 4px;

                .anticon svg {
                    display: inline-block;
                    color: #030304a1 !important;
                }
            }
            .hr{
                border: 0.1px solid #2d84b3;
                width: 69%;
            }
            .cardfooter{
                // background-color: #242729;
                padding: 5px;
                border-radius: 5px;
                margin-top: 16px;
                color: ${props => props.theme.bodyContent.pageContent.color};
            }
            .cardfooterdtl{
                color: ${props => props.theme.bodyContent.pageContent.color};
                padding: 5px;
            }
        }

    }
}
`;

export { ProductWrapper };
