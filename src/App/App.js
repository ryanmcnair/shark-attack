import React from 'react';
import './App.scss';
import students from '../helpers/data/studentsData';
import SharkTank from './SharkTank';
import Graveyard from './Graveyard';

class App extends React.Component {
  state = {
    living: students.livingStudents(),
    departed: students.dearlyBeloved(),
  }

  followTheLight = () => {
  
  };

  render() {
    return (
      <div className="App">
        <SharkTank livingStudents={this.state.living} />
        <Graveyard dearlyBeloved={this.state.departed} />
        <button className="btn btn-danger" onClick={this.followTheLight}>SHARK ATTACK</button>
      </div>
    );
  }
}

export default App;
