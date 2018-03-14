import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const addKill = (event) => {
  // alert("KILL!")
  let kill = document.createElement('p').innerText = 'KILL'
  event.target.parentNode.innerHTML += kill

}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={addKill} />
  </div>,
  document.getElementById('root')
);
