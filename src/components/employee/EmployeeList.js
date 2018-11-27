import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AnimalCard from "../animal/AnimalCard"

class EmployeeList extends Component {
  render() {
    return (
      <section className="employees list">
        <h2>Employees</h2>
        {
          this.props.employees.map(employee =>
            <div key={employee.id} className="card card--employee">
              <div className="card-body">
                <h5 className="card-title">
                  {employee.name}
                  <a href="#"
                    onClick={() => this.props.deleteEmployee(employee.id)}
                    className="card-link">Delete</a>
                </h5>

                <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                <div className="animals--caretaker">
                  {
                    this.props.animals
                      .filter(anml => anml.employeeId === employee.id)
                      .map(anml => <AnimalCard key={anml.id} animal={anml} getAnimalOwners={this.props.getAnimalOwners} {...this.props} />)
                  }
                </div>

              </div>
            </div>
          )
        }
      </section>
    );
  }
}

export default EmployeeList

