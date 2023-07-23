import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';

import '@tremor/react/dist/esm/tremor.css'

const root_html = document.getElementById('root')

if (root_html) {
    const root = ReactDOM.createRoot(root_html);
    root.render(  
        
        <App />
        
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
