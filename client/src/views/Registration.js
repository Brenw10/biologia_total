import React from 'react';
import RegistrationTable from '../components/RegistrationTable';
import { Paper } from '@material-ui/core';
import student from '../services/student';
import StudentCoursesEdition from '../components/StudentCoursesEdition';

export default class Registration extends React.Component {
  state = {
    students: [],
    student: {},
    open: false,
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    student
      .getAll()
      .then(students => this.setState({ students }));
  }
  onCloseDialog() {
    this.setState({ open: false });
    this.refresh();
  }
  render() {
    return (
      <Paper className="container">
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