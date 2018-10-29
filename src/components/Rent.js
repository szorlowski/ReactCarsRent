import React from 'react';
import qs from 'query-string';
import "../styles/content.css"

const Rent = (props) => {
  const vehicleId = qs.parse(props.location.search, {ignoreQueryPrefix: true}).vehicleId;
  let errors = undefined;

  function handleErrors(response) {
    if (!response.ok) {
      errors = response.text();
      console.log(errors);
    } else {
      props.history.push("/")
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    data.set('rentedFrom', data.get('from'));
    data.set('rentedTo', data.get('to'));
    data.set('userId', props.userId);
    data.set('vehicleId', vehicleId);
    let json = {
      "rentedFrom": data.get('from'),
      "rentedTo": data.get('to'),
      "customer": {
        "id": props.userId
      },
      "vehicle": {
        "id": vehicleId
      }
    };

    fetch(`http://localhost:8080/rents`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json)
    })
      .then(handleErrors);
  }

  return (
    <div className="content">
      <form className="login" onSubmit={handleSubmit}>
        <h1>Rent Form</h1>
        <div className="errors">
          {errors}
        </div>
        <p>Rent From</p>
        <input type="date" name="from"/>
        <p>Rent To</p>
        <input type="date" name="to"/>
        <br/>
        <br/>
        <input type="submit" value="Confirm"/>
      </form>
    </div>
  )
};

export default Rent;