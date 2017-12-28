import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from './main/Menu';
import Home from './landing/Home';
import UserList from './user/UserList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="page-wrapper">
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserList} />
        </div>
      </div>
    );
  }
}
