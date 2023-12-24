import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../static/css/Home.css'
import '../static/vendor/bootstrap/css/bootstrap.min.css'
import '../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../static/fonts/iconic/css/material-design-iconic-font.min.css'
import '../static/vendor/animate/animate.css'
import '../static/vendor/css-hamburgers/hamburgers.min.css'
import '../static/vendor/animsition/css/animsition.min.css'
import '../static/vendor/select2/select2.min.css'
import '../static/vendor/daterangepicker/daterangepicker.css'

function HomePage(){

  const showToast = (type, message) => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      toast.success('Logged in Successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      localStorage.removeItem('isLoggedIn');
    }
  }, []);
  
  return(
    <div id="main-home">
      <ToastContainer/>
      <div id="ecom-head-nav">
        <div id="head-nav-link">
          <div class="search-container">
            <form action="/search" method="get">
              <input type="text" placeholder="Search for Products, Medicine..." name="search" class="search-input"/>
              <button type="submit" class="search-button">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <button class="upload-pres">
            <i class="fa fa-camera" aria-hidden="true"></i>
            Upload Prescriptions
          </button>
          <button class="nav-btn"><Link class="nav-link">Browse</Link></button>
          <button class="nav-btn"><Link class="nav-link">Brands</Link></button>
        </div>
      </div>
      <div id="ecom-body">

      </div>
    </div>
  );
}

export default HomePage;