import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './rootReducer';
import App from './components/App/AppContainer';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

if (module.hot) {
    module.hot.accept('./rootReducer', () =>
        store.replaceReducer(rootReducer)
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
