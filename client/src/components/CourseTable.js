import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import course from '../services/course';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    course
      .getAll()
      .then(courses => this.setState({ courses }))
  }
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Curso</TableCell>
              <TableCell align="center">Descrição</TableCell>
            </TableRow>
          </TableHead>
          {this.state.courses.map((row, key) => (
            <TableBody key={key}>
              <TableRow>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.description ? row.description : 'N/A'}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </Paper>
    );
  }
}

export default Course;
