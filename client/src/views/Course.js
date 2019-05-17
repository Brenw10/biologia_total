import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import course from '../services/course';
import CourseTable from '../components/CourseTable';
import CourseEdition from '../components/CourseEdition';

export default class Course extends React.Component {
  state = {
    dialog: false,
    course: {},
    courses: [],
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    course
      .getAll()
      .then(courses => this.setState({ courses }))
  }
  onCloseDialog() {
    this.setState({ dialog: false });
    this.refresh();
  }
  render() {
    return (
      <div>
        <CourseTable
          onClickEdit={course => this.setState({ dialog: true, course })}
          courses={this.state.courses}
        />
        <CourseEdition
          open={this.state.dialog}
          course={this.state.course}
          onClose={this.onCloseDialog.bind(this)}
        />
        <Fab
          color="primary"
          className="float-right-bottom"
          onClick={() => this.setState({ dialog: true, course: {} })}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}