import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from "./owner/OwnerList"
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnersAnimalsManager from "../modules/OwnersAnimalsManager"

class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    owners_animals: []
  }

  componentDidMount() {
    const newState = {}
    AnimalManager.all()
      .then(animals => newState.animals = animals)
      .then(() => EmployeeManager.all())
      .then(employees => newState.employees = employees)
      .then(() => OwnerManager.all())
      .then(owners => newState.owners = owners)
      .then(() => LocationManager.all())
      .then(locations => newState.locations = locations)
      .then(() => OwnersAnimalsManager.getAll())
      .then(owners_animals => newState.owners_animals = owners_animals)
      .then(() => this.setState(newState))
  }

  deleteAnimal = id => {
    AnimalManager.get(id, "DELETE")
      .then(() => AnimalManager.getAll())
      .then(animals => this.setState({
        animals: animals
      })
      )
  }

  deleteEmployee = id => {
    return EmployeeManager.get(id, "DELETE")
      .then(() => EmployeeManager.getAll())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    return OwnerManager.get(id, "DELETE")
      .then(() => OwnerManager.getAll())
      .then(owners => this.setState({
        owners: owners
      })
      )
  }

  getAnimalOwners = (arr, currId) => {
    return arr.map(pair => {
      if (pair.animalId === currId) {
        return <p key={pair.id}>{pair.owner.name}</p>
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners_animals={this.state.owners_animals} getAnimalOwners={this.getAnimalOwners} />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews