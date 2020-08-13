import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Navbar extends React.Component{
    render() {
        return (
            <div class="fixed-top p-40px">
                <nav class="navbar fixed-top pt-40px navbar-expand-md navbar-dark bg-dark">
                    <a class="navbar-brand text-light font-weight-bold" href="/">myshopzone</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        
                        <ul class="navbar-nav mr-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/signin" className="nav-link">Sign In</Link>
                            <Link to="/cart" className="nav-link">Cart</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/deals" className="nav-link">Deals of Day</Link>
                        </ul>
                        <form class="form-inline mt-2 mt-md-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}