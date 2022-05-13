import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reservationStore';
import './index.css';
import Mission from './Components/Mission';
import MyProfile from './Components/MyProfile';
import AllRockets from './Components/AllRockets';
import NavBar from './Components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path='/Rockets' element={<AllRockets />}/>
          <Route path='/Mission' element={<Mission />}/>
          <Route path='/MyProfile' element={<MyProfile />}/>
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);

