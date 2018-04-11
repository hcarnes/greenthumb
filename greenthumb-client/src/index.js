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
  Link,
  Switch
} from 'react-router-dom'
import GardenDiscovery from './containers/GardenDiscovery'
import GardenDetails from './components/GardenDetails'

const store = createStore(gardensReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <Router>
    <div>
      <App />
      <Switch>
        <Route exact path="/" component={GardenDiscovery} />
        <Route exact path="/:query" component={GardenDiscovery} />
        <Route exact path="/gardens/:gardenId" component={GardenDetails} />
      </Switch>
    </div>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();