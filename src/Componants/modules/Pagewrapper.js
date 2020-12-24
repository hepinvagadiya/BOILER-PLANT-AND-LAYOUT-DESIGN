import styled from 'styled-components';

const PageWrapper = styled.div`
.ant-layout{
    background: ${props=>props.theme.bodyContent.background};
}

// header
.ant-layout-header {
    background: ${props=>props.theme.header.background};
    height: 50px;
    color: white;
    line-height: 50px;
}

// sidebar
aside{
    background: ${props=>props.theme.sidebar.bgcolor};
    width: 200px !important;
    flex: 0 0 56px !important;
    height: 93.5vh;
    border-radius: 0px 7px 7px 2px;
    max-width: 100px !important;
    min-width: 64px !important;
} 
.ant-menu-item a {
    color: ${props=>props.theme.sidebar.menu.color};
  }

// body
.pageLayout{
    background-color: ${props=>props.theme.bodyContent.pageContent.bgcolor};
    max-height: 90vh%;
    margin-top: 0.1%;
    // height: 90vh;
    margin-left: 0px;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
    border-radius: 8px;
}
`;

export { PageWrapper };
