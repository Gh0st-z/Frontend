import React, { useState } from 'react';
import './Login.css'

function LoginForm() {

  return (
    <div class = "container">
      <div class = "login-form">
        <form action="" method="POST" enctype="multipart/form-data">
          <h1 style={{margin: 25 + 'px'}}>Welcome Back!</h1>
          <div class="wrap-input100">
            <span class="label-input100">Username: </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;