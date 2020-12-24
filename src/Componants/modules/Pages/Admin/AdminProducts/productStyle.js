import styled from 'styled-components';

const ProductWrapper = styled.div`
.content{
    margin-left: 7%;
    width: 83.5%;
    padding: 20px;
}
.mainContent{
  color: ${props => props.theme.bodyContent.pageContent.color};
  border-radius: 6px;
  display: flex;
  justify-content: space-around;


  .todocontent{
    .heading{
      font-size: 17px;
      position: fixed;
      color: #009891;
      padding: 0px 0px 0px 19px;
    }
    .cardcontent{
      max-height: 86.4vh;
      width: 22vw;
      overflow: auto;
      margin-top: 31px;

      .card{
        background-color: transparent;
        border-radius: 5px;
        border: 1px solid #2184b387;
        padding: 9px;
        // width: 373px;
        margin: 0px 0px 12px 12px;
      } 
      .footer{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-top: 12px;

        .dot{
          height: 9px;
          width: 9px;
          margin: 4px 5px 0px 0px;
          border-radius: 2px;
          background-color: #ff00008a;
        }
        .ekasha{
          color: #2d84b3;
        }
        .ekasha-child{
          background-color: #2e4f61;
          color: #ffffff;
          margin: 0px 0px 0px 9px;
          padding: 0px 5px 1px 5px;
          border-radius: 50%;
        }
      }
    }
  }
}



.ant-card {
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  background-color: transparent;  
  border-radius: 5px;
  border: 1px solid #2184b387;
  margin: 0px 5px 12px 0px;
  color: ${props => props.theme.bodyContent.pageContent.color};
}
.ant-card-body {
  padding: 15px;
}
`;

export { ProductWrapper };
