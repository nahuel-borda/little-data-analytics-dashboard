import './App.css';
// Dashboard
// Login
import Login from "./pages/Login";
// Sidebar Components
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./pages/Services";
import {Devices} from "./pages/Devices";
import Providers from "./pages/Providers";
import Parts from "./pages/Parts";
import Brands from "./pages/Brands";
import {Models} from "./pages/Models";
import Clients from "./pages/Clients";
import Operators from "./pages/Operators";
//import { Events, EventsOne, EventsTwo } from "./pages/Events";
//import Contact from "./pages/ContactUs";
//import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import { GetDashboardAPI } from './api/get_dashboard'
import React, { useEffect } from 'react'
import { DashboardBase } from './components/DashboardBase';
// Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';


function LoggedContent(page_content) {
  return(
    <>
      <Sidebar />
      <Container className="h-100" fluid="md">
        <Row>
          <Col>{page_content}</Col>
        </Row>
      </Container>
    </>
  );
}

function App() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const use_api = () => {
      GetDashboardAPI().then((response) => {
          if (response.status !== 200) {
            throw new Error(`Request failed with status code ${response.status}`);
          }
          setData(response.data);
          console.log('entre!!')
          setLoading(false);
      })
        .catch((err) => {
          throw err;
      });
  };

    useEffect(() => {
        use_api([]);
    }, [])
    
  return (
    <Router>
      <Routes>
        <Route path='/' element={LoggedContent(<DashboardBase dataset={data} loading={loading}/>)/*<Login/>*/} />
        <Route path='/dashboard' element={LoggedContent(<DashboardBase dataset={data} loading={loading}/>)} />
        <Route path='/services' element={LoggedContent(<Services dataset={data} loading={loading}/>)} />
        <Route path='/devices' element={LoggedContent(<Devices dataset={data} loading={loading}/>)} />
        <Route path='/parts' element={LoggedContent(<Parts dataset={data} loading={loading}/>)} />
        <Route path='/brands' element={LoggedContent(<Brands dataset={data} loading={loading}/>)} />
        <Route path='/models' element={LoggedContent(<Models dataset={data} loading={loading}/>)} />
        <Route path='/providers' element={LoggedContent(<Providers dataset={data} loading={loading}/>)} />
        <Route path='/clients' element={LoggedContent(<Clients dataset={data} loading={loading}/>)} />
        <Route path='/operators' element={LoggedContent(<Operators dataset={data} loading={loading}/>)} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </Router>
  );
}
   
export default App;