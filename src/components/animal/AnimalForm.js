import React, { Component } from 'react';

export default class AnimalForm extends Component {
  // Set initial state
  state = {
    animalName: "",
    breed: "",
    employee: "",
    owner: "",
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  /*
      Local method for validation, creating animal object, and
      invoking the function reference passed from parent component
   */
  constructNewAnimal = evt => {
    evt.preventDefault()
    if (this.state.employee === "") {
      window.alert("Please select a caretaker")
    } else {
      const animal = {
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: this.props.employees.find(e => e.name === this.state.employee).id,
        ownerId: this.props.owners.find(o => o.name === this.state.owner).id
      }

      // Create the animal and redirect user to animal list
      this.props.addAnimal(animal).then(() => this.props.history.push("/animals"))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="animalForm list">
          <div className="form-group">
            <label htmlFor="animalName">Animal name</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="animalName"
              placeholder="Animal name" />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input type="text" required
              className="form-control"
              onChange={this.handleFieldChange}
              id="breed" placeholder="Breed" />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign to caretaker</label>
            <select defaultValue="" name="employee" id="employee"
              onChange={this.handleFieldChange}>
              <option value="">Select an employee</option>
              {
                this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="owner">Assign Owner</label>
            <select defaultValue="" name="owner" id="owner"
              onChange={this.handleFieldChange}>
              <option value="">Select an owner</option>
              {
                this.props.owners.map(o => <option key={o.id} id={o.id}>{o.name}</option>)
              }
            </select>
          </div>
          <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}