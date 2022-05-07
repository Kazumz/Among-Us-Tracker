import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import App from './views/App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import initialise from "./internationalisation/i18n";
import setupHotjar from './telemetry/hotjar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

setupHotjar();
initialise();

ReactDOM.render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </DndProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();