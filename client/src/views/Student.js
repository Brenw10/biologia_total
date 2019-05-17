import React from 'react';
import StudentTable from '../components/StudentTable';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import StudentEdition from '../components/StudentEdition';
import student from '../services/student';

export default class Student extends React.Component {
  state = {
    dialog: false,
    student: {},
    students: [],
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
    this.setState({ dialog: false });
    this.refresh();
  }
  render() {
    return (
      <div>
        <StudentTable
          onClickEdit={student => this.setState({ dialog: true, student })}
          students={this.state.students}
        />
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