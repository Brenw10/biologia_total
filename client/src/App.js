import React from 'react';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Student from './views/Student';
import { Grid } from '@material-ui/core';
import Course from './views/Course';
import Home from './views/Home';
import Registration from './views/Registration';

export default function App() {
  return (
    <Router>
      <HeaderBar />
      <Grid container spacing={24}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Route path="/" exact component={Home} />
          <Route path="/students" exact component={Student} />
          <Route path="/courses" exact component={Course} />
          <Route path="/registrations" exact component={Registration} />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Router>
  );
}
