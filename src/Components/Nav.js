import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
      <img id="logo" src={logo} alt="Logo" />
      <h1>Space hub</h1>
      </div>
      <div className='links'>
        <Link to='/'>Rockets</Link>
        <Link to='/Mission'>Mission</Link>
        <Link to='/MyProfile'>MyProfile</Link>
      </div>
    </nav>
  );
};

export default NavBar;