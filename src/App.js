import './App.css';
// Dashboard
import { Dashboard } from "./pages/Dashboard";
// Login
import Login from "./pages/Login";
// Sidebar Components
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./pages/Services";
import Devices from "./pages/Devices";
import Providers from "./pages/Providers";
import Parts from "./pages/Parts";
import Brands from "./pages/Brands";
import Models from "./pages/Models";
import Clients from "./pages/Clients";
import Operators from "./pages/Operators";
//import { Events, EventsOne, EventsTwo } from "./pages/Events";
//import Contact from "./pages/ContactUs";
//import Support from "./pages/Support";
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";

// Bootstrap Components
import {Container, Row, Col} from 'react-bootstrap';


function LoggedContent(page) {
  return(
    <>
      <Sidebar />
      <Container className="h-100" fluid="md">
        <Row>
          <Col>{page}</Col>
        </Row>
      </Container>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={LoggedContent(<Dashboard/>)} />
        <Route path='/services' element={LoggedContent(<Services/>)} />
        <Route path='/devices' element={LoggedContent(<Devices/>)} />
        <Route path='/parts' element={LoggedContent(<Parts/>)} />
        <Route path='/brands' element={LoggedContent(<Brands/>)} />
        <Route path='/models' element={LoggedContent(<Models/>)} />
        <Route path='/providers' element={LoggedContent(<Providers/>)} />
        <Route path='/clients' element={LoggedContent(<Clients/>)} />
        <Route path='/operators' element={LoggedContent(<Operators/>)} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </Router>
  );
}
   
export default App;