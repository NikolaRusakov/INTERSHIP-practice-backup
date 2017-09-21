import React from 'react';
import TodoList from './components/TodoList'
import {render} from 'react-dom'
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers'
import {createLogger} from "redux-logger";

class Wrapper extends React.Component {
    render() {
        return (
            <Provider store={store} key="provider">
                <div>
                    <App/>
                </div>
            </Provider>
        )
    }
}


const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
});

let createStoreWithMiddleware = compose(
    applyMiddleware(
        loggerMiddleware
    ),
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
render(<Wrapper store={store}/>, document.getElementById("root"));
