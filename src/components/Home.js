import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function HomePage(){
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
    const displayToast = () => {
      toast.success('Welcome To The Home Page!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    displayToast();
    },[navigate]);
    return(
        <div>
            <ToastContainer/>
        </div>
    );
}

export default HomePage;