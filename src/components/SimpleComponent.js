// Code SimpleComponentHere Here

import React from 'react';
import SimplerComponent from './SimplerComponent'


export default class SimpleComponent extends React.Component {

  state = {
    mood: "happy"
  }

  handleClick = (button) => {
    if (this.state.mood === "happy"){
      this.setState({
        mood: "sad"
      })
    } else {
      this.setState({
        mood: "happy"
      })

    }

  }

  render(){
    return (
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
    )
  }
}
