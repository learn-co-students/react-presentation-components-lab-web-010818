import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const happierClick = (e) => {
  alert("I'm getting happier!!!")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={happierClick} />
  </div>,
  document.getElementById('root')
);
