import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './firebase.ts'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)




