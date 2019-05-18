import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, Checkbox } from '@material-ui/core';
import student from '../services/student';
import course from '../services/course';

export default class StudentCoursesEdition extends React.Component {
  state = {
    courses: [],
    selectedCourses: [],
    open: false,
  }
  static getDerivedStateFromProps(props, state) {
    if (props.open !== state.open && props.student.courses) {
      const coursesId = props.student.courses.map(course => course._id);
      const selectedCourses = state.courses.filter(course => coursesId.indexOf(course._id) >= 0);
      return { open: props.open, selectedCourses };
    }
    return null;
  }
  componentDidMount() {
    course
      .getAll()
      .then(courses => this.setState({ courses }));
  }
  save() {
    student
      .setCourses(this.props.student._id, this.state.selectedCourses)
      .then(this.props.onClose);
  }
  render() {
    return (
      <Dialog
        fullWidth={true}
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <DialogTitle>Cursos de: {this.props.student.name}</DialogTitle>
        <DialogContent>
          <Select
            fullWidth
            value={this.state.selectedCourses}
            onChange={event => this.setState({ selectedCourses: event.target.value })}
            renderValue={list => list.map(selected => selected.title).join(', ')}
            multiple
          >
            {this.state.courses.map((course, key) => (
              <MenuItem key={key} value={course}>
                <Checkbox checked={this.state.selectedCourses.indexOf(course) >= 0} />
                {course.title}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancelar
            </Button>
          <Button color="primary" onClick={this.save.bind(this)}>
            Salvar
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

StudentCoursesEdition.propTypes = {
  student: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};