import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input'
import Submit from './components/submit';
import Weather from './components/weather'


ReactDOM.render(
  <div>
  <Input />
  <Submit />
  <Weather />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

