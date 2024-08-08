import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn
}
from 'mdb-react-ui-kit';

function SignIn() {
  return (
    <MDBContainer className="border p-3 my-5 d-flex flex-column w-50 rounded" style={{backgroundColor: 'white'}}>
      <div className='text-center'>
      <h1 className='py-2'>Sign In</h1>
      </div>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <Link to="/signup">Register</Link></p>
      </div>
    </MDBContainer>
  );
}

export default SignIn;