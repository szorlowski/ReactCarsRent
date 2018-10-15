import React, {Component} from 'react';
import '../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItems: ['Info', 'Campers', 'Limousines', 'Gallery', 'Contact'],
      content: {
        info: {
          details: 'Najlepsza firma ever',
          active: true
        },
        campers: [
          {
            title: 'camper1',
            photo: 'https://i.pinimg.com/originals/30/68/88/3068885184e2b887f66dda15729c5fdc.jpg',
            desc: 'desc1',
            price: '100'
          }, {
            title: 'camper2',
            photo: 'https://i.pinimg.com/236x/78/ec/51/78ec517b4128634932bad1293894a98e--vw-camper-vans-vw-vans.jpg',
            desc: 'desc2',
            price: '200'
          }, {
            title: 'camper3',
            photo: 'http://www.coolcampers.co.uk/wordpress/wp-content/uploads/2013/10/For-sale-VW-camper-S042.jpg',
            desc: 'desc3',
            price: '300'
          }, {
            title: 'camper4',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/VW-T1b-Bus-Normalausf%C3%BChrung-Fr.jpg',
            desc: 'desc4',
            price: '400'
          }, {
            title: 'camper5',
            photo: 'http://news.grantouritalia.it/wp-content/uploads/2016/05/P16-Main.jpg',
            desc: 'desc5',
            price: '500'
          }, {
            title: 'camper6',
            photo: 'http://modculture.typepad.com/.a/6a00d83451cbb069e201538fdc9ff8970b-800wi',
            desc: 'desc6',
            price: '600'
          }
        ]
      }
    }
  }

  handleChangeContent() {
    console.log('content Changed')
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header items={this.state.headerItems}/>
          <Content content={this.state.content}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
