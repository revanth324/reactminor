import React from 'react';
const Contact=()=>{
    return (<> 
    <h1> Contact Us</h1>
    <div class="container-fluid bg-light" width="500px" height="300px" float="center">
    <div>
    <form>
    <div class="row">
    <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
    </div>
    </div><br/>
    <div class="row">
    <div class="col">
    <input type="email" class="form-control" placeholder="E-mail" aria-label=" E-mail address"/>
    </div>
    </div><br/>
    <div class="row">
    <div class="col">
    <input type="mobile number" class="form-control" placeholder="mobile number" aria-label=" mobile number"/>
    </div>
    </div><br/>
    <div class="row">
    <div class="col">
    <textarea type="text" class="form-control" placeholder="message" aria-label="text"></textarea>
    </div>
    </div><br/>
    <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
    </form></div></div>
</>)
}
export default Contact;