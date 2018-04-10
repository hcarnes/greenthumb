import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import gardensReducer from './reducers/gardensReducer'
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const store = createStore(gardensReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();