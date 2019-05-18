import React from 'react';
import { Fab, Paper, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import course from '../services/course';
import CourseTable from '../components/CourseTable';
import CourseEdition from '../components/CourseEdition';

export default class Course extends React.Component {
  state = {
    dialog: false,
    course: {},
    allCourses: [],
    courses: [],
    search: '',
  }
  componentDidMount() {
    this.refresh();
  }
  refresh() {
    course
      .getAll()
      .then(allCourses => this.setState({ allCourses, courses: allCourses }))
      .then(() => this.onSearch(this.state.search));
  }
  onSearch(value) {
    const search = value.toLowerCase();
    const courses = this.state.allCourses.filter(course => course.title.toLowerCase().indexOf(search) >= 0);
    this.setState({ search: value, courses });
  }
  onCloseDialog() {
    this.setState({ dialog: false });
    this.refresh();
  }
  render() {
    return (
      <Paper className='container'>
        <TextField
          label="Procurar"
          placeholder="Digite titulo do curso"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          helperText="Busque por algum curso"
          value={this.state.search}
          onChange={event => this.onSearch(event.target.value)}
        />
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
      </Paper>
    );
  }
}