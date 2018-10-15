import React, {Component} from 'react';
import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Info from './Info';
import Contact from './Contact';
import Campers from './Campers';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItems: [
       {name: 'Info', active: false, desc: 'info'},
       {name: 'Campers', active: false, content: [{name: 'camper1', stars: 3, price: 120, photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/White_Fiat_Ducato_Campervan_2006.jpg/1200px-White_Fiat_Ducato_Campervan_2006.jpg'},
                                                  {name: 'camper2', stars: 2, price: 100, photo: 'https://cdn2.melodijolola.com/media/files/styles/nota_imagen/public/field/image/camper.jpg'},
                                                  {name: 'camper3', stars: 1, price: 70, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_NFQkqdgVIDcdL8-yw0j9sh2CcTcaVXBKeFIMRIBjC0U6vvT' }]},
      {name: 'Limousines', active: false, content:  [{name: 'limuzyna1', stars: 2, price: 500, photo: 'https://www.weselezklasa.pl/images/gallery/119/11158_12.jpg'},
                                                  {name: 'limuzyna2', stars: 3, price: 2000, photo: 'https://thumbs.img-sprzedajemy.pl/1000x901c/3d/69/45/hummer-limuzyna-najwiekszy-w-europie-audi-r8-knurow-483026000.jpg'},
                                                      {name: 'limuzyna3', stars: 1, price: 400, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWjwz4fIocm4fsuESQim3nPqP_fY2Ll1OFUlZmLXhCH8lCHsl' }]},
       {name: 'Gallery', active: true, content: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/White_Fiat_Ducato_Campervan_2006.jpg/1200px-White_Fiat_Ducato_Campervan_2006.jpg',
        'https://cdn2.melodijolola.com/media/files/styles/nota_imagen/public/field/image/camper.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_NFQkqdgVIDcdL8-yw0j9sh2CcTcaVXBKeFIMRIBjC0U6vvT',
        'https://www.weselezklasa.pl/images/gallery/119/11158_12.jpg',
        'https://thumbs.img-sprzedajemy.pl/1000x901c/3d/69/45/hummer-limuzyna-najwiekszy-w-europie-audi-r8-knurow-483026000.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWjwz4fIocm4fsuESQim3nPqP_fY2Ll1OFUlZmLXhCH8lCHsl'
       ]},
       {name: 'Contact', active: false, desc: {phone: '123324345', email: 'email@random.com'}}
      ]
    }
  }

  headerItemClickHandler = itemIndex => {
    const headerItems = [...this.state.headerItems];
    headerItems.forEach(item => {
      item.active = false;
    })
    headerItems[itemIndex].active = !headerItems[itemIndex].active;
    this.setState({headerItems: headerItems});
  }

  render() {
    return (
      <div className="App">
      <Header items={this.state.headerItems} clicked={this.headerItemClickHandler} />

      <div className="container">
        <Contact contact={this.state.headerItems[4]} />
        <Info info={this.state.headerItems[0]}/>
        <Campers campers={this.state.headerItems[1]} />
        <Campers campers={this.state.headerItems[2]} />
        <Gallery photos={this.state.headerItems[3]} />
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;
