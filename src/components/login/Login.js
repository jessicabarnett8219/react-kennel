import React, { Component } from "react"



export default class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    rememberMe: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRememberBox = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.checked
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    console.log(this.state.rememberMe)
    if(this.state.rememberMe) {
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      )
    } else {
      sessionStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })
      )
    }

  }

  render() {
    return (
      <form onSubmit={this.handleLogin} className="list">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail">Email address</label>
        <input onChange={this.handleFieldChange} type="email"
          id="email"
          placeholder="Email address"
          required="" autoFocus="" />
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handleFieldChange} type="password"
          id="password"
          placeholder="Password"
          required="" />
        <label>Remember Me</label>
        <input onChange={this.handleRememberBox} type="checkbox" id="rememberMe" />
        <button type="submit">Sign in</button>
      </form>
    )
  }
}
