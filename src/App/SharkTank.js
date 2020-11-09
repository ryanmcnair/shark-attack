import React, { Component } from 'react';

export default class SharkTank extends Component {
  state = {
    students: [],
  };

  loadStudents = () => {
    this.setState();
  }

  render() {
    return (
    <h2>
        SharkTank
    </h2>
    );
  }
}
