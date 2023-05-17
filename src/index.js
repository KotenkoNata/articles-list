import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from './redux/store';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import routing from "./routing";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routing}/>
        </Provider>
    </React.StrictMode>
);

