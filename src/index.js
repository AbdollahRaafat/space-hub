import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reservationStore';
import './index.css';
import Mission from './Components/Mission';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';
import NavBar from './Components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Rockets />}/>
          <Route path='/Mission' element={<Mission />}/>
          <Route path='/MyProfile' element={<MyProfile />}/>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

