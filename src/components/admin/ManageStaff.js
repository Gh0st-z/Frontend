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

const AddStaffModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    role: 'staff'
  });

  const [message, setMessage] = useState('');

  const [passData, setPassData] = useState({
      password2: '',
  });

  const [formKey, setFormKey] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone_number' && !isNaN(value)) {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    } else if (name !== 'phone_number') {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));

  };

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

  const getServerIPAddress = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8000';
    } else {
        return `http://${window.location.hostname}:8000`;
    }
  };

  const API_BASE_URL = getServerIPAddress();

  const handlePassValidation = (e) => {
    const {name, value} = e.target;
    setPassData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  }

  if (!show) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.first_name.trim() ||
      !formData.last_name.trim() ||
      !formData.email.trim() ||
      !formData.phone_number.trim() ||
      !formData.password.trim()
    ){
      showToast('error', 'Please fill in all fields.');
    }
    else{
      if (formData.password != passData.password2) {
        showToast('error', 'The passwords do not match!');
      }
      else if (!/^\d+$/.test(formData.phone_number)) {
        showToast('error', 'Phone number should contain only numeric values.');
      }
      else{
        const emailCheckResponse = await axios.get(API_BASE_URL + '/autho/register-get/', {
          params: {
            email: formData.email,
          },
        });
        if(emailCheckResponse.data.exists){
          showToast('error', 'Email already registered!');
          setFormKey((prevKey) => prevKey + 1);
        }
        else{
          axios.post( API_BASE_URL + '/autho/register/', formData)
          .then(response => {
            console.log(response.data.message);
            setMessage(response.data.message);
            showToast('success', 'Account successfully created!');
            setFormKey((prevKey) => prevKey + 1);
          }).catch(error =>{
            console.log(error);
            setMessage('Error occurred during registration.');
            showToast('error', 'Error occurred during registration.');
          });
        }
      }
    }
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2 class="form-head">Add Staff</h2>
        <form action="" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div class="modal-name-input100">
            <span class="modal-name-label-input100">First Name: </span>
            <input class="modal-n-input100" type="text" name="first_name" onChange={handleInputChange}/>
          </div>
          <div class="modal-name-input100">
            <span class="modal-name-label-input100">Middle Name: </span>
            <input class="modal-n-input100" type="text" name="middle_name" onChange={handleInputChange}/>
          </div>
          <div class="modal-name-input100">
            <span class="modal-lname-label-input100">Last Name: </span>
            <input class="modal-ln-input100" type="text" name="last_name" onChange={handleInputChange}/>
          </div>
          <div class="modal-wrap-input100">
            <span class="modal-label-input100">Email: </span>
            <input class="modal-input100" type="email" name="email" onChange={handleInputChange}/>
          </div>
          <div class="modal-wrap-input100">
            <span class="modal-label-input100">Phone Number: </span>
            <input class="modal-input100" type="text" name="phone_number" onChange={handleInputChange}/>
          </div>
          <div class="modal-wrap-input100">
            <span class="modal-label-input100">Address: </span>
            <input class="modal-input100" type="text" name="address" onChange={handleInputChange}/>
          </div>
          <div class="modal-wrap-input100">
            <span class="modal-label-input100">Password: </span>
            <input class="modal-input100" type="password" name="password" onChange={handleInputChange}/>
          </div>
          <div class="modal-wrap-input100">
            <span class="modal-label-input100">Confirm Password: </span>
            <input class="modal-input100" type="password" name="password2" onChange={handlePassValidation}/>
          </div>
          <div class="wrap-input100">
            <button class="create-staff">Add Staff</button>
          </div>
        </form>
      </div>
    </div>
  );
}; 

function ManageStaffs(){

  const navigate = useNavigate(); 

  const [showAddStaffModal, setShowAddStaffModal] = useState(false);

  const openModal = () => {
    document.body.classList.add('body-no-scroll');
    setShowAddStaffModal(true);
  };
  
  const closeModal = () => {
    document.body.classList.remove('body-no-scroll');
    setShowAddStaffModal(false);
  };

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
    <div class="main-dashboard">
      <ToastContainer/>
      <div class="left-navigation">
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
      <div class="content">
        <h1 class="content-header">Manage Staffs</h1>
        <button class="add-staff-btn" onClick={openModal}>Add Staffs</button>
        <AddStaffModal show={showAddStaffModal} onClose={closeModal} />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  );
}

export default ManageStaffs;