import React, { Component } from 'react';
import GraveCard from './GraveStone';

export default class Graveyard extends Component {
  state = {
  }

  render() {
    const { dearlyBeloved } = this.props;
    const renderDeadToDom = () => dearlyBeloved.map((student) => <GraveCard key={student.id} firstName={student.firstName} lastName={student.lastName} />);
    return (
    <>
      <h1>
            Graveyard
            </h1>
            <div id="graveYard">{renderDeadToDom()}</div>
            </>
    );
  }
}
