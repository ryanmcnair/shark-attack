import React, { Component } from 'react';
import StudentCard from './LiveStudent';

export default class SharkTank extends Component {
  state = {}

  render() {
    const { livingStudents } = this.props;
    const renderLivingToDom = () => livingStudents.map((student) => <div key={student.id}>{student.firstName} {student.lastName}</div>);
    return (
      <>
      <h1>SharkTank</h1>
      <StudentCard renderLivingToDom={this.renderLivingToDom()} />
    <div>
      {renderLivingToDom()}
    </div>
    </>
    );
  }
}
