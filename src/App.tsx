import './App.css';
import './index.css';

import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { GetDashboardAPI } from './api/get_dashboard';
import { DashboardDataset } from './api/interfaces/interfaces';
import { BrandsTableBase } from './components/BrandsTableBase';
import { ClientsTableBase } from './components/ClientsTableBase';
import { DashboardBase } from './components/DashboardBase';
import { DevicesTableBase } from './components/DevicesTableBase';
import { ModelsTableBase } from './components/ModelsTableBase';
import { OperatorsTableBase } from './components/OperatorsTableBase';
import { PartsTableBase } from './components/PartsTableBase';
import { ProvidersTableBase } from './components/ProvidersTableBase';
import { ServicesTableBase } from './components/ServicesTableBase';
import { Sidebar } from "./components/Sidebar";
import { AboutUs } from "./pages/AboutUs";
import { Login } from './pages/Login';
import { Page } from './pages/Page';
import { Support } from "./pages/Support";

function SidebarWrapper(page_content: any) {
  return (
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
type Data = {
  dataset: DashboardDataset;
};

function App() {
  const [data, setData] = React.useState<Data>({ dataset: {} });
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

  return (
    <Router>
      <Routes>
        <Route path='/' element={(<Login />)} />
        <Route path='/dashboard' element={SidebarWrapper(<DashboardBase dataset={data} loading={loading} />)} />
        <Route path='/services' element={SidebarWrapper(<Page dataset={data} loading={loading} component={ServicesTableBase} />)} />
        <Route path='/devices' element={SidebarWrapper(<Page dataset={data} loading={loading} component={DevicesTableBase} />)} />
        <Route path='/parts' element={SidebarWrapper(<Page dataset={data} loading={loading} component={PartsTableBase} />)} />
        <Route path='/brands' element={SidebarWrapper(<Page dataset={data} loading={loading} component={BrandsTableBase} />)} />
        <Route path='/models' element={SidebarWrapper(<Page dataset={data} loading={loading} component={ModelsTableBase} />)} />
        <Route path='/providers' element={SidebarWrapper(<Page dataset={data} loading={loading} component={ProvidersTableBase} />)} />
        <Route path='/clients' element={SidebarWrapper(<Page dataset={data} loading={loading} component={ClientsTableBase} />)} />
        <Route path='/operators' element={SidebarWrapper(<Page dataset={data} loading={loading} component={OperatorsTableBase} />)} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;