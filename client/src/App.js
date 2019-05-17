import React from 'react';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Student from './views/Student';
import RegistrationTable from './components/RegistrationTable';
import { Grid } from '@material-ui/core';
import Course from './views/Course';

export default function App() {
  return (
    <Router>
      <HeaderBar />
      <Grid container spacing={24}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Route path="/students" component={Student} />
          <Route path="/courses" component={Course} />
          <Route path="/registrations" component={RegistrationTable} />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Router>
  );
}
