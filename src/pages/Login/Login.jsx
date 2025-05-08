import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets'; // Adjust the path as necessary
import { signup } from '../../config/firebase';

const Login = () => {

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUp = () => container.classList.add('right-panel-active');
    const handleSignIn = () => container.classList.remove('right-panel-active');

    signUpButton.addEventListener('click', handleSignUp);
    signInButton.addEventListener('click', handleSignIn);

    return () => {
      signUpButton.removeEventListener('click', handleSignUp);
      signInButton.removeEventListener('click', handleSignIn);
    };
  }, []);

  const [currentState,setCurrState] = useState("Create Account");
  // const [userName, SetUser] = useState("");
  // const [email,setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="login-form" action="#">
            <h1>{currentState}</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            {currentState === "Sign up"? <input type="text" placeholder="Username" className="login-input" /> : null}
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button className="login-button" id="login-Signup">{currentState === "Sign up"?"Create account":"Login Now"}</button>
            <div className="login-term">
              <input type='checkbox' />
              <p>Agree to terms of use & privacy policy</p>
            </div>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form className="login-form" action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <a href="#">Forgot your password?</a>
            <button className="login-button" id="login-Signin">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p id="p-login">To keep connected with us please login with your personal info</p>
              <button className="login-button ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p id="p-login">Enter your personal details and start journey with us</p>
              <button className="login-button ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
