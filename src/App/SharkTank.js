import React, { Component } from 'react';

export default class SharkTank extends Component {
  state = {
    students: [],
  };

  loadStudents = () => {
    this.setState(this.props.living());
  }

  render() {
    return (
    <h2>
        {this.props.students}
    </h2>
    );
  }
}
