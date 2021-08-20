import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from "./components/redux/reducers/auth";
import concessionsReducer from "./components/redux/reducers/concessions";
import categoryReducer from "./components/redux/reducers/category";
import subjectReducer from "./components/redux/reducers/subject";
import holidayReducer from "./components/redux/reducers/holiday";
import classInfoReducer from "./components/redux/reducers/classInformation";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  concessions: concessionsReducer,
  category: categoryReducer,
  subject: subjectReducer,
  holiday: holidayReducer,
  classInfo: classInfoReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();