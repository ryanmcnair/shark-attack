# Shark Attack
Oh no your entire class has fallen into a pool infested with sharks and they are HUNGRY.

## Motivation
Tasked with creating an app that shows all classmates within a "Sharktank" section. Upon clicking the "Shark Attack" button a random student is taken from the tank and put into the "Graveyard".

## Tech/Framework
React, JSX, Sass, HTML

## Code Snippet

````javascript
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
````

## Deployed Site
https://laughing-goldwasser-93ff36.netlify.app/