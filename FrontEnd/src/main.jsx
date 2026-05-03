import { createRoot } from 'react-dom/client'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/Typeahead.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
