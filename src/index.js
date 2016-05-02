import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App';
//============my test===============
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


//===========my test end============
// render(<App name='World'/>, document.getElementById('root'));
