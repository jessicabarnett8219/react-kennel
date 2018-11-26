import React, { Component } from "react"


export default class EmployeeDetail extends Component {
  render() {
    const employee = this.props.employees.find(employee => employee.id === parseInt(this.props.match.params.employeeId)) || {}

    return (
      <section className="employee list">
        <div key={employee.id}>
          <h4>
            {employee.name}
          </h4>
          <h6>{employee.phone}</h6>
          <a href="#"
            onClick={() => this.props.deleteEmployee(employee.id)
              .then(() => this.props.history.push("/employees")
              )}
            className="card-link">Delete</a>
        </div>
      </section>
    )
  }
}