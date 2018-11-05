import React from 'react';
import Header from './components/Header/Header';
import DashboardHelper from './components/DashboardHelper/DashboardHelper';
import Dashboard from './containers/Dashboard/Dashboard';

const App = () => (
  <React.Fragment>
    <Header />
    <DashboardHelper />
    <Dashboard />
    <div>Related Article</div>
    <footer>Footer</footer>
  </React.Fragment>
);

export default App;
