import React, { Component } from 'react';

class OwnerList extends Component {
  render() {
    return (
      <section className="owners list">
        <h2>Owners</h2>
        {
          this.props.owners.map(owner =>
            <div key={owner.id}>
              <h3>{owner.name}</h3>
              <p>{owner.phoneNumber}</p>
            </div>
          )
        }
      </section>
    );
  }
}

export default OwnerList