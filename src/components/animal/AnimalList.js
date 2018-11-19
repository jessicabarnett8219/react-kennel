import React, { Component } from 'react';

class AnimalList extends Component {
  render() {
    return (
      <section className="animals list">
        <h2>Animals</h2>
        {
          this.props.animals.map(animal =>
            <div key={animal.id}>
              {animal.name}
            </div>
          )
        }
      </section>
    );
  }
}

export default AnimalList

// filter animal-owners joiner looking for current animal and if it's current animal grab owner id, then loop through owner list to filter for that owner id, then grab the owner name, then map with that owner name and animal name
