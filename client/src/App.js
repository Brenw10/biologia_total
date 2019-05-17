import React from 'react';
import HeaderBar from './components/HeaderBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Student from './components/Student';
import Course from './components/Course';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <HeaderBar />
      <Route path="/students" exact component={Student} />
      <Route path="/courses" exact component={Course} />
      <Route path="/registrations" exact component={Registration} />
    </Router>
  );
}

export default App;
