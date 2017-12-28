import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  changeMenu(name) {

  }

  toggleMenu() {

  }

  render() {

    return (
      <nav className="navbar navbar-fixed-top" role="navigation">
        <div className="container" >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle" >
              <span className="sr-only">Menu</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link to="/home" className="navbar-brand">Logo</Link>
          </div>

          <div className="collapse navbar-collapse" id="header-bar">
            <ul className="nav navbar-nav">
              <li>
                <Link
                  to="/"
                  onClick={this.changeMenu.bind(this, "/")} >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  onClick={this.changeMenu.bind(this, "/")} >
                  Users
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  className="menu-help"
                  to="/about-us"
                  onClick={this.changeMenu.bind(this, 'about-us')}>
                  <i className="fa fa-question-circle-o">About</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
