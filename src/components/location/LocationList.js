import React, { Component } from 'react';

class LocationList extends Component {
  render() {
    return (
      <article>
        <h2>Locations</h2>
        <h3>Nashville North</h3>
          <p>500 Puppy Way</p>
        <h3>Murfreesboro</h3>
          <p>350 Boston Terrier Dr.</p>
        <h3>Nashville West</h3>
          <p>720 Golf St.</p>
      </article>
    );
  }
}

export default LocationList