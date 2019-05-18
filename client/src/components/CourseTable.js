import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

export default class CourseTable extends React.Component {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Curso</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        {this.props.courses.map((row, key) => (
          <TableBody key={key}>
            <TableRow>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.description ? row.description : 'N/A'}</TableCell>
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

CourseTable.propTypes = {
  onClickEdit: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};