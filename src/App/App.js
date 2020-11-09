import React from 'react';
import './App.scss';
import students from '../helpers/data/studentsData';
import SharkTank from './SharkTank';
import Graveyard from './Graveyard';

class App extends React.Component {
  render() {
    const living = students.livingStudents();
    const departed = students.dearlyBeloved();
    return (
      <div className="App">
        <SharkTank livingStudents={living} />
        <Graveyard dearlyBeloved={departed} />
        <button className="btn btn-danger">SHARK ATTACK</button>
      </div>
    );
  }
}

export default App;
