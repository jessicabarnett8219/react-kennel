import { Route, Redirect } from "react-router-dom"
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
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from "./employee/EmployeeDetail"
import AnimalForm from "./animal/AnimalForm"
import Login from './login/Login'

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
    AnimalManager.getAll()
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

  // Check if credentials are in local storage
  isAuthenticatedSession = () => (sessionStorage.getItem("credentials") !== null)

  isAuthenticatedLocal = () => (localStorage.getItem("credentials") !== null)


  addAnimal = (animal) => AnimalManager.post(animal)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
      animals: animals
    })
    )

  deleteAnimal = id => {
    return AnimalManager.get(id, "DELETE")
      .then(() => AnimalManager.all())
      .then(animals => this.setState({
        animals: animals
      }))
  }

  deleteEmployee = id => {
    return EmployeeManager.get(id, "DELETE")
      .then(() => EmployeeManager.all())
      .then(employees => this.setState({
        employees: employees
      })
      )
  }

  deleteOwner = id => {
    return OwnerManager.get(id, "DELETE")
      .then(() => OwnerManager.all())
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
          if (this.isAuthenticatedSession() || this.isAuthenticatedLocal()) {
            return <LocationList {...props} locations={this.state.locations} />
          }
          else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/login" component={Login} />
        <Route exact path="/employees" render={props => {
          if (this.isAuthenticatedSession() || this.isAuthenticatedLocal()) {
            return <EmployeeList {...props} deleteEmployee={this.deleteEmployee}
              employees={this.state.employees} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props} employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        }} />
        <Route path="/owners" render={(props) => {
          if(this.isAuthenticatedSession() || this.isAuthenticatedLocal())  {
          return <OwnerList owners={this.state.owners} /> } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticatedSession() || this.isAuthenticatedLocal()) {
          return <AnimalList {...props} animals={this.state.animals}
          owners_animals={this.state.owners_animals}
          getAnimalOwners={this.getAnimalOwners}
          /> } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}
            animals={this.state.animals}
            addAnimal={this.addAnimal}
            employees={this.state.employees}
            owners={this.state.owners} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
