import React, { Component } from 'react';

export default class Graveyard extends Component {
  state = {
  }

  render() {
    const { dearlyBeloved } = this.props;
    const renderDeadToDom = () => dearlyBeloved.map((student) => <div key={student.id}>{student.firstName} {student.lastName}</div>);
    return (
    <>
    <h2>
            Graveyard
            </h2>
            <div>{renderDeadToDom()}</div>
            </>
    );
  }
}
