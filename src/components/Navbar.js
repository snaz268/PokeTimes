import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
 
// withRouter: is a higher order component that wraps another component and gives it extra powers. It is used bcuz Navbar is not using Route so without withRouter props = {} i.e. empty object
const Navbar = (props) => {
    //console.log(props); // {} when we are not wrapping in withRouter
    // setTimeout(()=>{
    //     props.history.push('/about') //After 2 sec, redirect to about page
    // }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poke' Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
//export default withRouter(Navbar);
export default Navbar;