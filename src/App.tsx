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
import { withPage } from './components/withPage';
import { AboutUs } from "./pages/AboutUs";
import { Login } from './pages/Login';
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

  const ServicesPage = withPage(ServicesTableBase);
  const DevicesPage = withPage(DevicesTableBase);
  const PartsPage = withPage(PartsTableBase);
  const BrandsPage = withPage(BrandsTableBase);
  const ModelsPage = withPage(ModelsTableBase);
  const ProvidersPage = withPage(ProvidersTableBase);
  const ClientsPage = withPage(ClientsTableBase);
  const OperatorsPage = withPage(OperatorsTableBase);

  return (
    <Router>
      <Routes>
        <Route path='/' element={(<Login />)} />
        <Route path='/dashboard' element={SidebarWrapper(<DashboardBase dataset={data} loading={loading} />)} />
        <Route path='/services' element={SidebarWrapper(<ServicesPage dataset={data} loading={loading} />)} />
        <Route path='/devices' element={SidebarWrapper(<DevicesPage dataset={data} loading={loading} />)} />
        <Route path='/parts' element={SidebarWrapper(<PartsPage dataset={data} loading={loading} />)} />
        <Route path='/brands' element={SidebarWrapper(<BrandsPage dataset={data} loading={loading} />)} />
        <Route path='/models' element={SidebarWrapper(<ModelsPage dataset={data} loading={loading} />)} />
        <Route path='/providers' element={SidebarWrapper(<ProvidersPage dataset={data} loading={loading} />)} />
        <Route path='/clients' element={SidebarWrapper(<ClientsPage dataset={data} loading={loading} />)} />
        <Route path='/operators' element={SidebarWrapper(<OperatorsPage dataset={data} loading={loading} />)} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;