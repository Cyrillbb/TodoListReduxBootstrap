import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
