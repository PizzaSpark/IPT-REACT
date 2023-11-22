import React from 'react'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="App">
      <body>
          <div class="card">
              <h1>Register Form</h1>
              <br/>
              <div>
              <label for="Full Name">Full Name: </label>
                  <input type="text" id="Full Name"></input>
                  <br />
                  <label for="username">Username: </label>
                  <input type="text" id="username"></input>
                  <br />
                  <label for="password">Password: </label>
                  <input type="password" id="password"></input>
                  <br />
                  <Link to="/login">
                    <button type="button">Log in</button>
                  </Link>
                  <button type="submit">Register</button>
              </div>
          </div>
      </body>
    </div>
  )
}

export default Register
