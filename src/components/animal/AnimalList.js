import React, { Component } from 'react';
import { Link } from "react-router-dom";
import dog from "./DogIcon.png"
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
        <div className="card-row">
        {
          this.props.animals.map(animal =>
            <div key={animal.id} className="card">
              <div className="card-body">
                <h3 className="card-title">
                  <img src={dog} className="icon--dog"></img>
                  Pet: {animal.name}
                  <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                </h3>
                Owned By:<h5>{this.props.getAnimalOwners(this.props.owners_animals, animal.id)}</h5>
              </div>
            </div>
          )
        }
        </div>
      </section>
    )
  }
}
export default AnimalList



