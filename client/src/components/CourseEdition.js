import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import course from '../services/course';

export default class CourseEdition extends React.Component {
  state = {
    course: {
      title: '',
      description: '',
    },
    open: false,
  }
  static getDerivedStateFromProps(props, state) {
    return props.open !== state.open ? props : null;
  }
  onChange = key => event => {
    const course = Object.assign(this.state.course, { [key]: event.target.value });
    this.setState({ course });
  }
  save() {
    if (this.state.course._id) {
      course
        .update(this.state.course._id, this.state.course)
        .then(this.props.onClose);
    } else {
      course
        .create(this.state.course)
        .then(this.props.onClose);
    }
  }
  render() {
    return (
      <Dialog
        fullWidth={true}
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <DialogTitle>Curso</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Titulo"
            type="text"
            fullWidth
            value={this.state.course.title}
            onChange={this.onChange('title')}
          />
          <TextField
            margin="dense"
            label="Descrição"
            type="text"
            fullWidth
            value={this.state.course.description}
            onChange={this.onChange('description')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancelar
            </Button>
          <Button onClick={this.save.bind(this)} color="primary">
            Salvar
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CourseEdition.propTypes = {
  course: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};