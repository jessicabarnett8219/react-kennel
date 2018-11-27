import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Animal.css"

class AnimalList extends Component {
  render() {
    return (
      <section className="animals list">
        <div className="animalButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/animals/new")
            }}>Admit Animal</button>
        </div>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              <h3>{animal.name}</h3>
              <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
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




