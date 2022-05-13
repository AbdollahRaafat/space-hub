import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Header = () => (
  <header className="header">
    <NavLink
      className="h-full flex flex-row gap-3 justify-between items-center "
      to="/"
    >
      <img className="h-full" src={logo} alt="logo" />
      <span className="text-3xl">
        Space Travelers&apos; Hub
      </span>
    </NavLink>
    <nav className="nav">
      <NavLink
        className={(navData) => (navData.isActive ? 'underline text-slate-600' : '')}
        to="/"
      >
        Rocket
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? 'underline text-slate-600' : '')}
        to="/missions"
      >
        Mission
      </NavLink>
      <div className="w-2 h-4 border-r-2 border-black" />
      <NavLink
        className={(navData) => (navData.isActive ? 'underline text-slate-600' : '')}
        to="/profile"
      >
        Profile
      </NavLink>
    </nav>
  </header>
);

export default Header;
