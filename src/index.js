import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import 'antd/dist/antd.css';
import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers);

/* Helpful when debug in console */
window.store = store; 
store.subscribe(() => console.log('Store was changed. Current state:', store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
