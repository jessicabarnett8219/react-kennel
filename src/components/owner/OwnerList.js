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
              <p>
                <a href="#" onClick={() => this.props.deleteOwner(owner.id)}
                  className="card-link">Delete
                </a>
              </p>
            </div>
          )
        }
      </section>
    );
  }
}

export default OwnerList