import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import student from '../services/student';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    student
      .getAll()
      .then(students => this.setState({ students }))
  }
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Data de Nascimento</TableCell>
            </TableRow>
          </TableHead>
          {this.state.students.map((row, key) => (
            <TableBody key={key}>
              <TableRow>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.birthday ? row.birthday : 'N/A'}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </Paper>
    );
  }
}

export default Student;
