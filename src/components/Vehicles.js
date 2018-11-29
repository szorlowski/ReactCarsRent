import React from 'react';
import lifecycle from 'react-pure-lifecycle'
import Vehicle from './Vehicle'
import '../styles/campers.css'
import '../styles/content.css'
import Carousel from 'nuka-carousel';
import photo1 from '../assets/camper1.jpg'
import photo2 from '../assets/camper2.jpg'
import photo3 from '../assets/camper3.jpg'
import photo4 from '../assets/camper4.jpg'
import photo5 from '../assets/camper5.jpg'
import photo6 from '../assets/camper6.jpg'

const methods = {
  componentDidMount(props) {
    var fetchMethod = props.fetchVehicles;
    fetchMethod();
  }
};

let options = {
  autoplay: true,
  autoplayInterval: 10000,
  dragging: true,
  slidesToShow: 3,
  wrapAround: true
};

let campers = [];
campers.push(photo1, photo2, photo3, photo4, photo5, photo6);

const Vehicles = props => {
  return (
    <div className="info content" onClick={props.clicked}>
      <div className="campers">
        <Carousel {...options}>
          {props.vehicles.content.map((vehicle, index) => {
            return <Vehicle
              key={Math.random()}
              price={vehicle.price}
              stars={vehicle.stars}
              name={vehicle.name}
              photo={campers[index]}
              rented={vehicle.rented}
              id={vehicle.id}/>
          })}
        </Carousel>
      </div>
    </div>
  )
};
export default lifecycle(methods)(Vehicles);