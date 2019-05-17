import React from 'react';
import StudentTable from '../components/StudentTable';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import StudentEdition from '../components/StudentEdition';

export default class Student extends React.Component {
  state = {
    dialog: false,
    student: {},
  }
  render() {
    return (
      <div>
        <StudentTable
          onClickEdit={student => this.setState({ dialog: true, student })}
        />
        <StudentEdition
          open={this.state.dialog}
          student={this.state.student}
          onClose={() => this.setState({ dialog: false })}
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