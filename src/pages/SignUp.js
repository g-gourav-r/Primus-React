import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function SignUp() {
  return (
    <MDBContainer className="border p-3 my-5 d-flex flex-column w-50 rounded" style={{backgroundColor:'white'}}>
      <h1 className='py-2 text-center'>Sign Up</h1>
      <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
      <div className='d-flex justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
      </div>
      <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
      <p className='text-center'>Sign up using:</p>
      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>
      </div>
      <div className="text-center mt-4">
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </MDBContainer>
  );
}

export default SignUp;
