import React from 'react';
import './App.scss';
import students from '../helpers/data/studentsData';
import SharkTank from './SharkTank';
import Graveyard from './Graveyard';

class App extends React.Component {
  state = {
    living: students.livingStudents(),
    departed: students.dearlyBeloved(),
  };

  resetState = () => {
    this.setState({
      living: students.livingStudents(),
      departed: students.dearlyBeloved(),
    });
  }

  randomStudent = () => {
    if (this.state.living.length) {
      const studentChooser = this.state.living[
        Math.floor(Math.random() * this.state.living.length)
      ].id;
      students.followTheLight(studentChooser);
      this.resetState();
    }
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-danger" onClick={this.randomStudent}>SHARK ATTACK</button>
        <Graveyard
          key={this.state.departed.id}
          dearlyBeloved={this.state.departed}
        />
        <SharkTank
          key={this.state.living.id}
          livingStudents={this.state.living}
        />
      </div>
    );
  }
}

export default App;
