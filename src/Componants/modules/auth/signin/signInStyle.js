import styled from 'styled-components';

const   SignInWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: ${props=>props.theme.background};
    
    .ant-input-affix-wrapper {
        color: rgba(0, 0, 0, 0.85);
        background-color: transparent;
        font-size: 14px;
        border: 1px solid #0d4f64 !important;
        border-radius: 2px;
    }
    .ant-input {
        background-color: transparent !important;
        color: gray;
    }
    .ant-radio-inner {
        width: 16px;
        height: 16px;
        background-color: transparent;
        border-color: royalblue;
        border-radius: 25%;
    }
    .ant-radio-inner::after {
        top: 4px;
        left: 4.2px;
        border-radius: 27%;
        background-color: #00bbbb;
    }
    .animate{
        top: 47% !important;
        opacity:1 !important;
        transition:top 1s;
    }
    .signInContent{
        background-color: ${props=>props.theme.signin.background};
        color: ${props=>props.theme.color};
        max-width: 365px;
        min-width: 365px;
        border: ${props=>props.theme.signin.border};
        box-shadow: ${props=>props.theme.boxShadow};
        opacity: 0;
        top: 0%;
        left: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        border-radius: 10px;
        padding: 30px;
        transition: top 1s,opacity 1.5s;

        .let {
            margin-left: 39%;
            font-size: 40px;
            padding: 18px;
            border-radius: 30%;
            border: 2px solid ${props=>props.theme.signin.userborderColor};
            color: #bfbfbf;
          }
        .login{
            text-align: center;
            padding: 10px;
        }
        
        .inputs{
            padding: 15px;
        }
        .usertype{
            display:flex;
        }
        .button{
            float: right;
            padding: 39px 16px 0px 0px;
        }
        .ant-btn-primary {
            color: #fff;
            background: transparent;
            border-radius: 3px;
            border: 1px solid #00e2ff57;
        }
    }
    
`;

export default SignInWrapper;
