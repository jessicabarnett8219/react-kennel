import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EmployeeList extends Component {
  render() {
    return (
      <section className="employees list">
        <h2>Employees</h2>
        {
          this.props.employees.map(employee =>
            <div key={employee.id}>
              {employee.name}
              <p>
              <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
              </p>
            </div>
          )
        }
      </section>
    );
  }
}

export default EmployeeList

