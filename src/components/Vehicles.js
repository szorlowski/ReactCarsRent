import React from 'react';
import lifecycle from 'react-pure-lifecycle'
import Vehicle from './Vehicle'
import '../styles/campers.css'
import '../styles/content.css'

const methods = {
    componentDidMount(props) {
        let fetchMethod = props.fetchVehicles;
        fetchMethod();
    }
};

const Vehicles = props => {

    const updateVehicles = () => {
        const price = document.getElementById("price").value;
        console.log("Searching by price..." + price)
        const fetchMethod = props.fetchVehicles;
        fetchMethod(price);
    };

    return (
        <div className="info content" onClick={props.clicked}>
            <input id="price"/>
            <button id="searchButton" onClick={updateVehicles}>SEARCH BY PRICE</button>
            <div className="campers">
                {props.vehicles.content.map(vehicle => {
                    return <Vehicle
                        key={Math.random()}
                        price={vehicle.price}
                        stars={vehicle.stars}
                        name={vehicle.name}
                        photo={vehicle.photo}
                        rented={vehicle.rented}
                        id={vehicle.id}/>
                })}
            </div>
        </div>
    )
};
export default lifecycle(methods)(Vehicles);