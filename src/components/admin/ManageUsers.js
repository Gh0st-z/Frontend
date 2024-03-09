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
  if (!show) {
    return null;
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process your form here. You might want to use axios to send data to your API.
    onClose(); // Close the modal after form submission
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Add Staff</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Address" name="address" />
          <input type="tel" placeholder="Phone" name="phone" />
          <button type="submit">Submit</button>
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