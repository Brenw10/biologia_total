import React from 'react';
import StudentTable from '../components/StudentTable';
import { Fab, TextField, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import StudentEdition from '../components/StudentEdition';
import student from '../services/student';

export default class Student extends React.Component {
  state = {
    dialog: false,
    student: {},
    allStudents: [],
    students: [],
    search: '',
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    student
      .getAll()
      .then(allStudents => this.setState({ allStudents, students: allStudents }))
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
    this.setState({ dialog: false });
    this.refresh();
  }
  render() {
    return (
      <div>
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
          <StudentTable
            onClickEdit={student => this.setState({ dialog: true, student })}
            students={this.state.students}
          />
        </Paper>
        <StudentEdition
          open={this.state.dialog}
          student={this.state.student}
          onClose={this.onCloseDialog.bind(this)}
        />
        <Fab
          color="primary"
          className="float-right-bottom"
          onClick={() => this.setState({ dialog: true, student: {} })}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}