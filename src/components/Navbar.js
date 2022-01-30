import React from "react";
import { NavLink } from "react-router-dom";

import './../scss/navbar.scss';

const Navbar = () => {
	return (
		<nav className='navbar'>	
			<NavLink to='/' className='navbar__link'>List of users (Desktop App)</NavLink> 
		</nav>
	)
}

export default Navbar;