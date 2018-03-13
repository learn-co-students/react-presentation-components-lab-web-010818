import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const sayHi = () => {
  console.log('hi')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={sayHi} />
  </div>,
  document.getElementById('root')
);
