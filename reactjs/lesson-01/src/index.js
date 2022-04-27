import React from 'react';
import ReactDOM  from 'react-dom';
import './style.css';

function firstJSX() {
  return (
    <div>
      Bruno Sobral
    </div>
  )
}
const App = () => {

  return (
    <div className='App'>
      {firstJSX()}
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);