import React from 'react';
import '../Login.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import loginwallpaper from '../loginwallpaper.webp';

function Login() {
    return (
        <MDBContainer className="my-5">
    
          <MDBCard>
            <MDBRow className='g-0'>
    
              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
    
                  <div className='d-flex flex-row mt-2 mb-5'>
                    <MDBIcon fas icon="chart-pie fa-3x me-3" style={{ color: '#f43f5e' }}/>
                    <span className="h1 fw-bold mb-0">Workshop Data Dashboard</span>
                  </div>
    
                  <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
    
                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
    
                  <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>
    
                </MDBCardBody>
              </MDBCol>

              <MDBCol md='6'>
                <MDBCardImage src={loginwallpaper} alt="login form" className='rounded-start w-100'/>
              </MDBCol>
            </MDBRow>
          </MDBCard>
    
        </MDBContainer>
      );
}

export default Login;