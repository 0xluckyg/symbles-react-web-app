import React, { Component } from 'react';
import '../styles/general.css';
import NavigationBar from './navigation-bar';

export default class App extends Component {
  render() {
    return (
      <div>
          <NavigationBar/>
          {this.props.children}
      </div>
    );
  }
}
