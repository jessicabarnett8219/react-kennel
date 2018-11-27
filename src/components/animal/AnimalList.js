import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AnimalCard from "./AnimalCard"
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
              <AnimalCard key={animal.id} animal={animal} {...this.props} />
            )
          }
        </div>
      </section>
    )
  }
}
export default AnimalList



