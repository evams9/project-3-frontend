import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
//import username from '../assets/img/username.png';
import loginimg from '../assets/img/loginimg.png';
import egg from '../assets/img/egg.png';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleName = e => setName(e.target.value);

  const handleSignupSubmit = e => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state``
    signup(requestBody)
      .then(() => {
        navigate('/login');
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
      <form onSubmit={handleSignupSubmit} id="form-input">
        <label>Email:</label> 
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <label>Chef name:</label>
        <input type="text" name="name" value={name} /*placeholder={username}*/ onChange={handleName} />

        <button id="form-button" type="submit"><img src={loginimg} alt="login" id="loginimg"/></button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      <div id="dont">
      <p>Already have account?</p>
      <Link to={'/login'}> Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
