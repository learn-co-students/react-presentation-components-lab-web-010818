// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood:'happy'
    }
  }

  handleClick = () => {
    const current = this.state.mood
    if(current === 'happy') {
      this.setState({
        mood:'sad'
      })
    } else {
      this.setState({
        mood:'happy'
      })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
