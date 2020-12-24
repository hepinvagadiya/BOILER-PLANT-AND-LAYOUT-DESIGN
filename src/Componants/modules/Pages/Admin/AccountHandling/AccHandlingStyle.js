import styled from 'styled-components';

const AccWrapper = styled.div`
   .user{
        padding: 0px 0px 0px 19px;
        font-size: 22px;
        color: #029891;
   }
   .userList{
        // border: 1px solid #08385d;
        margin: 15px;
        padding: 5px;
        border-radius: 7px;
        max-height: 75vh;
        overflow: auto;

        .listHeader{
            padding: 8px;
            border-bottom: 1px solid #09374e;
            display: grid;
            grid-template-columns: 12% 35% 37% 10%;
            color: #009891;
        }
        .libody{
            padding: 1px 8px 7px 8px; 
            color: ${props => props.theme.bodyContent.pageContent.color};  

            .listrow{
                background-color: ${props => props.theme.bodyContent.pageContent.listrow.bgcolor};
                border: 1px solid ${props => props.theme.bodyContent.pageContent.listrow.borderColor};
                padding: 11px;
                border-radius: 5px;
                display: grid;
                grid-template-columns: 11% 35% 39% 10%;
                margin-top: 10px;
            }
        }

        .ant-table {
            background-color: ${props => props.theme.bodyContent.pageContent.listrow.bgcolor};
            border: 1px solid ${props => props.theme.bodyContent.pageContent.listrow.borderColor};
            color: ${props => props.theme.bodyContent.pageContent.color};
        }
        .ant-table-thead > tr > th {
            color: ${props => props.theme.bodyContent.pageContent.color};
            font-weight: 50;
            background: ${props => props.theme.bodyContent.pageContent.listrow.bgcolor};
            border-bottom: 1px solid #09374e;
        }
        .ant-table-tbody > tr > td {
            border-bottom: 1px solid #08385d;
        }
        .ant-table-tbody > tr.ant-table-row-selected > td {
            background: #12181c;
            color: #14c0dc;
        }
        .ant-table-tbody > tr.ant-table-row:hover > td {
            background: transparent;
            color: royalblue;
         }
        .ant-checkbox-inner {
            background-color: transparent;
            border-color: #029891;
        }
               
        .ant-pagination-item-link {
            background-color: transparent;
            border: 1px solid #08385d;
        }
        .ant-pagination-item-active {
            font-weight: 500;
            background: transparent;
            border-color: #08385d;
        }
        .ant-pagination-item {
            background-color: transparent;
            border: 1px solid #08385d;
        }
        .ant-pagination-item a{
            color: ${props => props.theme.bodyContent.pageContent.color} !important;
        }
        .ant-pagination-item-link {
            color: rgb(2 152 129);
        }
    }

`;

export { AccWrapper };
