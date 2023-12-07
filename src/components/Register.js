import React, {useState} from 'react';

function Registerform(){
    return(
    <div>
        <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
          <div class="container">

          </div>
      </nav>
    </header>
    <div class="col-md-7 col-lg-6 ml-auto">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="input-group col-lg-6 mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                            <i class="fa fa-user text-muted"></i>
                        </span>
                    </div>
                    <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md"/>
                </div>
            </div>
        </form>
    </div>
    </div>
    );
}

export default Registerform;