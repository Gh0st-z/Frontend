import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import '../static/vendor/bootstrap/css/bootstrap.min.css'
import '../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../static/fonts/iconic/css/material-design-iconic-font.min.css'
import '../static/vendor/animate/animate.css'
import '../static/vendor/css-hamburgers/hamburgers.min.css'
import '../static/vendor/animsition/css/animsition.min.css'
import '../static/vendor/select2/select2.min.css'
import '../static/vendor/daterangepicker/daterangepicker.css'

function Registerform(){
    return(
    <div id = 'main_reg'>
      <div id = 'left-side'>
        <div class = "reg-form">
            <form action="" method="POST" enctype="multipart/form-data">
            <h1 id = "cacc">Create an account</h1>
            <div class="name-input100">
                <span class="name-label-input100">First Name: </span>
                <input class="n-input100" type="text" name="first_name"/>
            </div>
            <div class="name-input100">
                <span class="name-label-input100">Middle Name: </span>
                <input class="n-input100" type="text" name="middle_name"/>
            </div>
            <div class="name-input100">
                <span class="name-label-input100">Last Name: </span>
                <input class="n-input100" type="text" name="last_name" />
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Email: </span>
                <input class="input100" type="email" name="email" placeholder="Enter your Email"/>
                <span class="focus-input100" data-symbol="&#xf206;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Phone Number: </span>
                <input class="input100" type="email" name="email" placeholder="Enter your Phone Number"/>
                <span class="focus-input100" data-symbol="&#9743;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Password: </span>
                <input class="input100" type="password" name="pass" placeholder="Enter your password"/>
                <span class="focus-input100" data-symbol="&#xf190;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Confirm Password: </span>
                <input class="input100" type="password" name="pass" placeholder="Re-Enter your password"/>
                <span class="focus-input100" data-symbol="&#xf190;"></span>
            </div>
            <div class="caps-lock-warning">
                <p>Caps Lock is enabled.</p>
            </div>
            <div class = "align-mid">
                <div class="wrap-input100">
                    <button class="register-btn">Create</button>
                </div>
                <span id="account-alr">Already have an account?</span><br/>
                <nav>
                    <Link id='linkreg' to="/"> Sign In Now </Link>
                </nav>
            </div>
            </form>
        </div>
      </div>
    </div>
    );
}

export default Registerform;