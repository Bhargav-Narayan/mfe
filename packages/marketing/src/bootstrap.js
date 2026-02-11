// mount fn to start up the app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};
// if we are in development and in isolation
// call the mount fn immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through container
// and we should export the mount fn
export { mount };
