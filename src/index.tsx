import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import '@tremor/react/dist/esm/tremor.css';

const root_html = document.getElementById('root')

if (root_html) {
    const root = ReactDOM.createRoot(root_html);
    root.render(
        <App />
    );
}