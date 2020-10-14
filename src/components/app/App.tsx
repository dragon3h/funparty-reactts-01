import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Login from '../login/login.component';
import Home from '../home/home.component';

type AppProps = {};

type AppState = {
  isAuth: boolean
};

class App extends React.Component<AppProps, AppState> {
  state = {
    isAuth: false
  };
  
  render() {
    let app;
    if (this.state.isAuth) {
      app = (
          <Home/>
      );
    } else {
      app = (
          <Login/>
      );
    }
    return (
        <div className="container">
          {app}
        </div>
    );
  }
}

export default App;
