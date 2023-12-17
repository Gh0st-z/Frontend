import React, {lazy, useEffect, useState} from 'react';
import axios from 'axios';
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
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
    });

    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/autho/register/', formData)
        .then(response => {
            console.log(response.data.message);
            setMessage(response.data.message);
        }).catch(error =>{
            console.log(error);
            setMessage('Error occured during registration.');
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
      
    return(
    <div id = 'main_reg'>
      <div id = 'left-side'>
        <div class = "reg-form">
            <form action="" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <h1 id = "cacc">Create an account</h1>
            <div class="name-input100">
                <span class="name-label-input100">First Name: </span>
                <input class="n-input100" type="text" name="first_name" onChange={handleInputChange}/>
            </div>
            <div class="name-input100">
                <span class="name-label-input100">Middle Name: </span>
                <input class="n-input100" type="text" name="middle_name" onChange={handleInputChange}/>
            </div>
            <div class="name-input100">
                <span class="name-label-input100">Last Name: </span>
                <input class="n-input100" type="text" name="last_name" onChange={handleInputChange}/>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Email: </span>
                <input class="input100" type="email" name="email" placeholder="Enter your Email" onChange={handleInputChange}/>
                <span class="focus-input100" data-symbol="&#xf206;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Phone Number: </span>
                <input class="input100" type="text" name="phone_number" placeholder="Enter your Phone Number" onChange={handleInputChange}/>
                <span class="focus-input100" data-symbol="&#9743;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Password: </span>
                <input class="input100" type="password" name="password" placeholder="Enter your password" onChange={handleInputChange}/>
                <span class="focus-input100" data-symbol="&#xf190;"></span>
            </div>
            <div class="wrap-input100">
                <span class="label-input100">Confirm Password: </span>
                <input class="input100" type="password" name="password2" placeholder="Re-Enter your password"/>
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
                    <Link id='linkreg' to="/login"> Sign In Now </Link>
                </nav>
            </div>
            </form>
        </div>
      </div>
    </div>
    );
}

export default Registerform;