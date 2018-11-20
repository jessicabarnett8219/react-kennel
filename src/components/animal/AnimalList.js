import React, { Component } from 'react';
import "./Animal.css"

class AnimalList extends Component {
  render() {

    return (
      <section className="animals list">
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <h3>{animal.name}</h3>
              <a href="#" onClick={() => this.props.deleteAnimal(animal.id)}>Delete</a>
              <h5>Owned By:</h5>
              {this.props.getAnimalOwners(this.props.owners_animals, animal.id)}
            </div>
          )
        }
      </section>
    )
  }
}
export default AnimalList




