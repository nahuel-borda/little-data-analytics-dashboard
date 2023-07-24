import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../Login.css';
import loginwallpaper from '../loginwallpaper.webp';

export function Login() {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2 mb-5'>
                <MDBIcon fas icon="chart-pie fa-3x me-3" style={{ color: '#f43f5e' }} />
                <span className="h1 fw-bold mb-0">Data Dashboard</span>
              </div>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
              <Link to="/dashboard">
                <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                  Login
                </MDBBtn>
              </Link>
              <a className="small text-muted" href="#!">Forgot password? Just click the loggin button for a demo!</a>

            </MDBCardBody>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardImage src={loginwallpaper} alt="login form" className='rounded-start w-100' />
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}