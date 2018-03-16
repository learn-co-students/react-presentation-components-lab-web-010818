// Code SimplerComponentHere Here
import React from 'react';

const SimplerComponent = (props) => {

  const handleChange = (event) => {
    props.handleClick(event.target.value)
  }

  return (
    <div onClick={props.handleClick}>
    I am just happy!
    </div>
  )


}

export default SimplerComponent
