import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

*, ::after, ::before {
  box-sizing: unset !important;
}

.modal-dialog {
  position: revert !important;
}

.modal-backdrop.fade {
  opacity: 0 !important;
}

// /* scroll */

* {
  scrollbar-width: thin;
  scrollbar-color: #31363f transparent;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #31363f;
  left: 4px;
}

::-webkit-scrollbar-corner {
  background: #31363f;
}


// ant-design

.ant-notification-notice{
    background-color: rgba(23, 179, 179, 0.493) !important;
    color: white !important;
}

.ant-picker-panel-container {
  background-color: #0e7491 !important;
}
.ant-picker-header {
  border-bottom: 1px solid #000000 !important;
}
.ant-picker-time-panel-column {
  overflow-x: hidden;
}
.ant-picker-datetime-panel .ant-picker-time-panel {
  border-left: 1px solid #000000;
}
ant-piker-now-btn, a {
  color: #000000 !important;
}
ant-piker-now-btn, a:hover {
  color: #000000 !important;
}
.ant-picker-time-panel-column:not(:first-child) {
  border-left: 1px solid #00c7ff5e;
}
  .ant-picker-footer {
    border-top: 1px solid #00c7ff3b !important;
  }
  
  .ant-notification-notice{
    background-color: rgba(23, 179, 179, 0.493) !important;
    color: white !important;
  }

  .ant-modal-content {
    background-color: #4a7784;
}
.ant-modal-header {
  background: #4a7784;
  border-bottom: 1px solid #00000024;
}
 
.ant-modal-footer {
  padding: 10px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #00000000;
  border-radius: 0 0 2px 2px;
}
`;

export { GlobalStyle };
