import './App.css';
import './index.css';
import Login from "./pages/Login";
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
import AboutUs from "./pages/AboutUs";
import Support from "./pages/Support";
import { GetDashboardAPI } from './api/get_dashboard'
import React, { useEffect } from 'react'
import { DashboardBase } from './components/DashboardBase';
import {Container, Row, Col} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


function SidebarWrapper(page_content:any) {
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

  useEffect(() => {
    GetDashboardAPI().then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      setData(response.data);
      setLoading(false);
    })
      .catch((err) => {
        throw err;
    });
  }, [])

  const memoizedData = React.useMemo(() => data, [data]);
  const memoizedLoading = React.useMemo(() => loading, [loading]);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={SidebarWrapper(<DashboardBase dataset={memoizedData} loading={memoizedLoading}/>)/*<Login/>*/} />
        <Route path='/dashboard' element={SidebarWrapper(<DashboardBase dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/services' element={SidebarWrapper(<Services dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/devices' element={SidebarWrapper(<Devices dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/parts' element={SidebarWrapper(<Parts dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/brands' element={SidebarWrapper(<Brands dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/models' element={SidebarWrapper(<Models dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/providers' element={SidebarWrapper(<Providers dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/clients' element={SidebarWrapper(<Clients dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/operators' element={SidebarWrapper(<Operators dataset={memoizedData} loading={memoizedLoading}/>)} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/support' element={<Support/>} />
      </Routes>
    </Router>
  );
}
   
export default App;