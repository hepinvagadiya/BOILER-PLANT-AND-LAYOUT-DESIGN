import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import AppRouter from './appRouter'
import themes from "./core/setting/themes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
    };
  }
  render() {
    const {mode} = this.state
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes[mode]}>
          <GlobalStyle />
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;

