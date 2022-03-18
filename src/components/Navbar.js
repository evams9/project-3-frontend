import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import home from '../assets/img/home.png';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <button><img src={home} alt="home" id="homeimg" width="30px"/></button>
      </Link>

      {isLoggedIn && (
        <>
          <span id="navbar-position">Hey,{user && user.name}</span>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {' '}
            <button id="navbar-position">Sign Up</button>{' '}
          </Link>
          <Link to="/login">
            {' '}
            <button id="navbar-position">Login</button>{' '}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
