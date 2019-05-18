import React from 'react';
import RegistrationTable from '../components/RegistrationTable';
import { Paper, TextField } from '@material-ui/core';
import student from '../services/student';
import StudentCoursesEdition from '../components/StudentCoursesEdition';

export default class Registration extends React.Component {
  state = {
    allStudents: [],
    students: [],
    student: {},
    open: false,
    search: '',
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    student
      .getAll()
      .then(allStudents => this.setState({ students: allStudents, allStudents }))
      .then(() => this.onSearch(this.state.search));
  }
  onSearch(value) {
    const search = value.toLowerCase();
    const students = this.state.allStudents.filter(student =>
      student.name.toLowerCase().indexOf(search) >= 0 || student.email.toLowerCase().indexOf(search) >= 0
    );
    this.setState({ search: value, students });
  }
  onCloseDialog() {
    this.setState({ open: false });
    this.refresh();
  }
  render() {
    return (
      <Paper className="container">
        <TextField
          label="Procurar"
          placeholder="Digite nome ou email"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          helperText="Busque por algum aluno"
          value={this.state.search}
          onChange={event => this.onSearch(event.target.value)}
        />
        <RegistrationTable
          students={this.state.students}
          onClickEdit={student => this.setState({ open: true, student })}
        />
        <StudentCoursesEdition
          student={this.state.student}
          open={this.state.open}
          onClose={this.onCloseDialog.bind(this)}
        />
      </Paper>
    );
  }
}