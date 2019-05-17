import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="full-width left-alignment">
            Biologia Total Cursos
          </Typography>
          <Link to="/"><Button color="inherit">Home</Button></Link>
          <Link to="/students"><Button color="inherit">Students</Button></Link>
          <Link to="/courses"><Button color="inherit">Cursos</Button></Link>
          <Link to="/registrations"><Button color="inherit">Matricula</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;
