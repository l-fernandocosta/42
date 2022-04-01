import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { App } from './App';
import { UserProvider } from './context/UserContext';
import './services/firebase'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    
      <UserProvider>
        <App />
        <ToastContainer position='bottom-center' theme='dark' autoClose= {2500}/>
      </UserProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);
