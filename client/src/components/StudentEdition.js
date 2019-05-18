import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import moment from 'moment';
import student from '../services/student';

export default class StudentEdition extends React.Component {
  state = {
    student: {
      name: '',
      email: '',
      birthday: '',
    },
    open: false,
  }
  static getDerivedStateFromProps(props, state) {
    return props.open !== state.open ? props : null;
  }
  onChange = key => event => {
    const student = Object.assign(this.state.student, { [key]: event.target.value });
    this.setState({ student });
  }
  save() {
    if (this.state.student._id) {
      student
        .update(this.state.student._id, this.state.student)
        .then(this.props.onClose);
    } else {
      student
        .create(this.state.student)
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
        <DialogTitle>Estudante</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Nome"
            type="text"
            fullWidth
            value={this.state.student.name}
            onChange={this.onChange('name')}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={this.state.student.email}
            onChange={this.onChange('email')}
          />
          <TextField
            label="Data de Nascimento"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={moment(new Date(this.state.student.birthday)).utc().format('YYYY-MM-DD')}
            onChange={this.onChange('birthday')}
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

StudentEdition.propTypes = {
  student: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};