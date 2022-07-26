import React from "react";
import './welcome.css';
import { Link } from "react-router-dom";


export function Welcome(){
    return(
        <div className="container-div">
            <h1>Welcome to Store!</h1>
            <Link to='/login'>Login</Link>
            <span>or</span>
            <Link to='/signUp'>Register</Link>
        </div>
    )
}