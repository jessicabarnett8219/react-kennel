import React, { Component } from 'react';
import "./Animal.css"

class AnimalList extends Component {

  getAnimalOwners (currId) {
    return this.props.owners_animals.map(pair => {
      if (pair.animalId === currId) {
        return <p key={pair.id}>{pair.owner.name}</p>
      }
    })
  }
  render() {

    return (
      <section className="animals list">
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <h3>{animal.name}</h3>
              <h5>Owned By:</h5>
              {this.getAnimalOwners(animal.id)}
            </div>
          )
        }
      </section>
    )
  }
}
export default AnimalList




