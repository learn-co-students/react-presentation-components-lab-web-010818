// Code SimpleComponentHere Here
import React from 'react';

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      })
    } else {
      this.setState({
        mood: "happy"
      })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

export default SimpleComponent
