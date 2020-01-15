import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import rootReducer from './reducers/index'
import App from './components/App';
import { Provider } from 'react-redux'

const initialState = {
    books: [
        {
            id: Math.random(),
            title: "Harry Potter",
            category: "Kids"
        },
        {
            id: Math.random(),
            title: "Alchemist",
            category: "Learning"
        },
        {
            id: Math.random(),
            title: "Evil and the mask",
            category: "History"
        }
    ]
}
const store = createStore(rootReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
