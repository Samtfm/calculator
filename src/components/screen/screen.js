import React, { Component } from 'react';
import './screen.css';

class Screen extends Component {
  render(){
    return (
      <div>
        {this.props.screenDisplay}
      </div>
    );
  }
}

export default Screen;
