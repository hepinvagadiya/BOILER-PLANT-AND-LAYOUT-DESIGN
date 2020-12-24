import styled from 'styled-components';

const TopbarWrapper = styled.div`
padding: 0 15px;  
// display: flex;
// justify-content: space-between;

  .date{
    margin: 5px 43px 0px 0px;
    .ant-picker {
      background: ${props => props.theme.header.datepiker.bgcolor};
      padding: 6px 11px 6px;
      border: 1px solid transparent;
      border-radius: 6px;
    }
    .ant-picker-input > input {
      color: ${props => props.theme.header.datepiker.color};
    }
    .ant-picker-suffix {
      color: ${props => props.theme.header.datepiker.color};
    }
  }
  .ant-page-header-heading-extra {
    display: flex;
}
  .user{
    margin: 0px 18px 0px 18px;
    .Pic {
      color: #000000;
      background-color: rgb(122 187 220 / 43%);
      border: 1px solid #006196c9;
      border-radius: 8px;
    }
  }
  .ant-page-header {
    padding: 0px 10px;
  }
  .ant-page-header-heading-title {
    color: royalblue;
    font-size: 25px;
    font-weight: 30 !important;
  }
  .brad{
    padding-top: 4px;
    padding-left: 8px;
  }
  .ant-page-header-heading-sub-title {
    color: #ff5200;
    margin-top: 10px;
  }
  .switch{
    margin: 7px 20px 0px 0px; 
  }
`;

export { TopbarWrapper };
