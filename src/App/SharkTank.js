import React, { Component } from 'react';
import StudentCard from './LiveStudent';

export default class SharkTank extends Component {
  state = {}

  render() {
    const { livingStudents } = this.props;
    const renderLivingToDom = () => livingStudents.map((student) => <StudentCard key={student.id} firstName={student.firstName} lastName={student.lastName} image={student.image} />);
    return (
      <>
      <h1>SharkTank</h1>
    <div id="sharkTank">
      {renderLivingToDom()}
    </div>
    </>
    );
  }
}
