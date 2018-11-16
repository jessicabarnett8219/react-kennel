import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"


class Kennel extends Component {
  render() {
    return (
      <div>
        <h1>Student Kennels</h1>
        <EmployeeList />
        <LocationList />
      </div>
    );
  }
}

export default Kennel