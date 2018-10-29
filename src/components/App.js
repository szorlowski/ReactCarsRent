import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import '../styles/App.css';
import Header from "./Header";
import Info from './Info';
import Footer from "./Footer";
import Vehicles from "./Vehicles";
import Contact from "./Contact";
import Login from "./Login";
import Rent from "./Rent";

class App extends Component {
  setCampers = () => {
    console.log("fetching campers...");
    fetch(`http://localhost:8080/vehicles?type=c`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        let campers = this.state.campers;
        campers.content = response;
        this.setState({campers: campers});
        console.log("fetching done")
      });
  };

  setLimousines = () => {
    console.log("fetching limousines...");
    fetch(`http://localhost:8080/vehicles?type=l`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        let limousines = this.state.limousines;
        limousines.content = response;
        this.setState({limousines: limousines});
        console.log("fetching done")
      });
  };

  headerItems =
    [
      {name: 'Info', link: '/'}, {name: 'Campers', link: '/campers'}, {name: 'Limousines', link: '/limousines'},
      {name: 'Gallery', link: '/gallery'}, {name: 'Contact', link: '/contact'}, {name: 'Login', link: '/login'}
    ];

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: {
        userId: undefined,
        status: false
      },
      campers: {
        content: []
      },
      limousines: {
        content: []
      },
      info: {
        desc: 'Opis najlepszej firmy ever'
      },
      contact: {
        desc: {
          phone: '+48 123 456 789',
          email: 'super@email.com'
        }
      }
    }

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            render={(props) => <Header {...props} items={this.headerItems}/>}/>
          <div className="container">
            <Route
              exact path="/"
              render={(props) => <Info {...props} info={this.state.info}/>}/>
            <Route
              exact path="/campers"
              render={(props) => <Vehicles {...props} vehicles={this.state.campers}
                                           fetchVehicles={() => this.setCampers()}/>}
            />
            <Route
              exact path="/limousines"
              render={(props) => <Vehicles {...props} vehicles={this.state.limousines}
                                           fetchVehicles={() => this.setLimousines()}/>}
            />
            <Route
              exact path="/contact"
              render={(props) => <Contact {...props} contact={this.state.contact}
                                          fetchVehicles={() => this.setLimousines()}/>}
            />
            <Route
              exact path="/login"
              render={props => <Login {...props}/>}/>
            <Route
              exact path="/rent"
              render={props => <Rent {...props} userId={1}/>}/>
          </div>
          <Route
            path="/"
            component={Footer}
          />
        </div>
      </Router>
    );
  }
}

export default App;
