import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../static/css/ManageStaffs.css'
import '../../static/vendor/bootstrap/css/bootstrap.min.css'
import '../../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../static/fonts/iconic/css/material-design-iconic-font.min.css'
import '../../static/vendor/animate/animate.css'
import '../../static/vendor/css-hamburgers/hamburgers.min.css'
import '../../static/vendor/animsition/css/animsition.min.css'
import '../../static/vendor/select2/select2.min.css'
import '../../static/vendor/daterangepicker/daterangepicker.css'

function ManageStaffs(){

  const navigate = useNavigate();

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

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userToken');
    localStorage.setItem('isLoggedout', 'true');
    navigate('/login');
  };
  
  return(
    <div id="main-dashboard">
      <ToastContainer/>
      <div id="left-navigation">
        <div class="pharmacy-name">
          Pharmacy Name
        </div>
        <div class="dashboard-button">
          <button class="nav-buttons"><Link class="button-links" to="/admin-dashboard">Dashboard</Link></button>
        </div>
        <div class="manage-staffs">
          <button class="nav-buttons"><Link class="button-links" to="">Manage Staffs</Link></button>
        </div>
        <div class="manage-users">
          <button class="nav-buttons"><Link class="button-links" to="">Manage Users</Link></button>
        </div>
        <div class="manage-products">
          <button class="nav-buttons"><Link class="button-links" to="">Manage Products</Link></button>
        </div>
        <div class="admin-profile">
          <button class="nav-buttons"><Link class="button-links" to="">Admin Profile</Link></button>
        </div>
        <div class="logout">
          <button class="nav-buttons"><Link class="button-links" to="">Logout</Link></button>
        </div>
      </div>
      <div class="dashboard">
        <div id="card">
          <div id="card-header">
            Today's Sales
          </div>
          <div id="card-body">
            $10,945
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStaffs;