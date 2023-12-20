import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/Login.css'
import '../static/vendor/bootstrap/css/bootstrap.min.css'
import '../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../static/fonts/iconic/css/material-design-iconic-font.min.css'
import '../static/vendor/animate/animate.css'
import '../static/vendor/css-hamburgers/hamburgers.min.css'
import '../static/vendor/animsition/css/animsition.min.css'
import '../static/vendor/select2/select2.min.css'
import '../static/vendor/daterangepicker/daterangepicker.css'

function LoginForm() {
  return (
    <div id="main">
      <div class = "container">
      <div class = "login-form">
        <form action="" method="POST" enctype="multipart/form-data">
          <h1 id = "wb">Welcome Back!</h1>
          <div class="wrap-input100">
            <span class="label-input100">Email: </span>
            <input class="input100" type="text" name="email" placeholder="Enter your email"/>
            <span class="focus-input100" data-symbol="&#xf206;"></span>
          </div>
          <div class="wrap-input100">
            <span class="label-input100">Password: </span>
            <input class="input100" type="password" name="pass" placeholder="Enter your password"/>
            <span class="focus-input100" data-symbol="&#xf190;"></span>
          </div>
          <div class="caps-lock-warning">
            <p>Caps Lock is enabled.</p>
          </div>
          <a href="#" id="for-pass">Forgot Password?</a>
          <div class="wrap-input100">
            <button class="login-btn">Login</button>
          </div>
          <span id="account">Don't have an account?</span><br/>
          <nav>
            <Link id="loginlink" to="/register"> Create an account</Link>
          </nav>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;