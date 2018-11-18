import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "../Kennel.css"


class Kennel extends Component {

  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Wally"},
    { id: 2, name: "Andre"},
    { id: 3, name: "Amigo"},
    { id: 4, name: "Nelson"}
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
  }


  render() {
    return (
      <div>
        <h1>Student Kennels</h1>
        <EmployeeList employees={this.state.employees} />
        <LocationList locations={this.state.locations} />
        <AnimalList animals={this.state.animals} />
      </div>
    );
  }
}

export default Kennel