import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="App">
            <body>
                <div className="box">
                    <div class="card">
                        <h1>Login Form</h1>
                        <br />
                        <div>
                            <label for="username">Username: </label>
                            <input type="text" id="username"></input>
                            <br />
                            <label for="password">Password: </label>
                            <input type="password" id="password"></input>
                            <br />
                            <Link to="/register">
                                <button type="button">Sign Up</button>
                            </Link>
                            <button type="submit">Log In</button>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Login;
