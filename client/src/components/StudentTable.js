import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import student from '../services/student';
import PropTypes from 'prop-types';

export default class StudentTable extends React.Component {
  state = {
    students: [],
  }
  componentDidMount() {
    student
      .getAll()
      .then(students => this.setState({ students }));
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
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          {this.state.students.map((row, key) => (
            <TableBody key={key}>
              <TableRow>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.birthday ? row.birthday : 'N/A'}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => this.props.onClickEdit(row)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </Paper>
    );
  }
}

StudentTable.propTypes = {
  onClickEdit: PropTypes.func.isRequired,
};