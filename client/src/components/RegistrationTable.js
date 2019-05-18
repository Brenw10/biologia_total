import React from 'react';
import { Table, TableHead, TableCell, TableBody, IconButton, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

export default class RegistrationTable extends React.Component {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Aluno</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Cursos Matriculados</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        {this.props.students.map((row, key) => (
          <TableBody key={key}>
            <TableRow>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.courses.map(course => course.title).join(' - ')}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => this.props.onClickEdit(row)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    );
  }
}

RegistrationTable.propTypes = {
  students: PropTypes.array.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};