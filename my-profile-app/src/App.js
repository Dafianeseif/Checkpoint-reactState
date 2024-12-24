import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Seif Eddine Dafiane",
        bio: "Un personnage  talentueux.",
        imgSrc: "./images/profile.jfif",
        profession: "Développeur WEb",
      },
      show: false,
      timeElapsed: 0, 
      lastUnmountTime: null, 
    };
  }

  componentDidMount() {
    if (this.state.show) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.show && this.state.show) {
      this.startTimer();
    }

    if (prevState.show && !this.state.show) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.setState({ lastUnmountTime: new Date() });
    this.stopTimer();
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      
        <div className="App">
        <h1>Bienvenue!</h1>

        <button onClick={this.toggleShow}>
          {this.state.show ? "Cacher le profil" : "Afficher le profil"}
        </button>

        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.bio}</p>
            <h2>{this.state.person.profession}</h2>
          </div>
        )}

        <p>temps écoulé  : {this.state.timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
