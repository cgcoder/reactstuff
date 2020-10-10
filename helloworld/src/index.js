import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import * as serviceWorker from './serviceWorker';

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-gray-700 text-center bg-gray-500 p-2">2</div>
      </div>
    </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
