// Code SimpleComponentHere Here
import React from "react";

class SimpleComponent extends React.Component {

  state = {
    mood: "happy"
  }

  handleClick = () => {
    console.log("sad")
    let newMood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({
      mood: newMood
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

SimpleComponent.defaultProps={
  mood: "happy"
}


export default SimpleComponent;
