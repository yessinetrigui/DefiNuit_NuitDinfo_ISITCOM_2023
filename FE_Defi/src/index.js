import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import User from './pages/User';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>


        <Routes>
                <Route exact path='/'  element={<App />} />
                <Route exact path='/login'  element={<Login />} />
                <Route exact path='/register'  element={<Register />} />
                <Route exact path='/user'  element={<User />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
