import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
//import username from '../assets/img/username.png';
import loginimg from '../assets/img/loginimg.png';
import egg from '../assets/img/egg.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password };

    login(requestBody)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formPage">
      <img src={egg} alt="egg" id="egg"/>
      <h1 id="app-name">Recipes Collector</h1>
      <h1 id="form-title">Sign Up</h1>

      <form onSubmit={handleLoginSubmit} id="form-input">
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} /> 

        <button id="form-login" type="submit"><img src={loginimg} alt="login" id="loginimg"/></button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div id="dont">
      <p>Dont have an account yet?</p>
      <Link  to={'/signup'}> Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
