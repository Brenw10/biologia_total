import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import student from '../services/student';

export default class StudentEdition extends React.Component {
  state = {}
  static getDerivedStateFromProps({ student }, { _id }) {
    if (student._id !== _id) {
      return student;
    }
    return null;
  }
  onChange = key => event => {
    this.setState({ [key]: event.target.value });
  }
  save() {
    student
      .update(this.state._id, this.state)
      .then(this.props.onClose);
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
            label="Name"
            type="text"
            fullWidth
            value={this.state.name}
            onChange={this.onChange('name')}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={this.state.email}
            onChange={this.onChange('email')}
          />
          <TextField
            label="Data de Nascimento"
            type="date"
            fullWidth
            defaultValue='2019-01-01'
            value={this.state.birthday}
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