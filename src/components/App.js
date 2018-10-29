import React, {Component} from 'react';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Info from './Info';
import Contact from './Contact';
import Vehicles from './Vehicles';
import Gallery from './Gallery';

class App extends Component {

  setCampers = () => {
    fetch(`http://localhost:8080/vehicles?type=c`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        let campers = this.state.campers;
        campers.content = response;
        this.setState({campers: campers});
      });
  };

  setLimousines = () => {
    fetch(`http://localhost:8080/vehicles?type=l`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        let limousines = this.state.limousines;
        limousines.content = response;
        this.setState({limousines: limousines});
      });
  };

  activateHeaderItem = (item) => {
    let state = {...this.state};
    Object.keys(state).forEach(key => {
      state[key].active = key.toLowerCase() === item.toLowerCase();
    });
    this.setState(state);
  };

  headerItems = ['Info', 'Campers', 'Limousines', 'Gallery', 'Contact'];

  constructor(props) {
    super(props);
    this.state = {
      campers: {
        active: false,
        content: []
      },
      limousines: {
        active: false,
        content: []
      },
      info: {
        active: true,
        desc: 'Opis najlepszej firmy ever'
      }
    }
  }

  componentDidMount() {
    this.setCampers();
    this.setLimousines();
  }

  render() {
    return (
      <div className="App">
        <Header items={this.headerItems} click={(name) => this.activateHeaderItem(name)}/>
        <div className="container">
          <Info info={this.state.info}/>
          <Vehicles vehicles={this.state.campers}/>
          <Vehicles vehicles={this.state.limousines}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
