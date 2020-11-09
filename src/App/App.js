import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentsData';
import SharkTank from './SharkTank';
import Graveyard from './Graveyard';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  livingStudents = () => {
    studentData.livingStudents().then((response) => {
      console.warn(response);
      this.setState({
        livingStudents: [response],
      });
    });
  };

  dearlyBeloved = () => {
    studentData.dearlyBeloved().then((response) => {
      this.setState({
        dearlyBeloved: [response],
      });
    });
  };

  render() {
    return (
      <div className="App">
        <SharkTank />
        <Graveyard />
        <button className="btn btn-danger">SHARK ATTACK</button>
      </div>
    );
  }
}

export default App;
