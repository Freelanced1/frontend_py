import React from "react";
import './index.css';
import info_icon from './info.png';
import proj_icon from './proj_icon.png';
import timeline_icon from './timeline_icon.png';
import security_icon from './security.png';
import logo from './freelanced_logo.gif';
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
    <div >
    <img className="logo" src={logo} />
	<Nav>
		<NavMenu>
		<NavLink to="/buyer_navpage1" activestyle="true">
            <img className="image_nav" src={info_icon} ></img>
			About you
		</NavLink>
		<NavLink to="/buyer_navpage2" activestyle="true">
            <img className="image_nav" src={proj_icon}></img>
			Project Description
		</NavLink>
		<NavLink to="/buyer_navpage3" activestyle="true">
            <img className="image_nav" src={timeline_icon}></img>
			Timeline and Budget
		</NavLink>
		<NavLink to="/buyer_navpage4" activestyle="true">
            <img className="image_nav" src={security_icon}></img>
			Security
		</NavLink>
		</NavMenu>
	</Nav>
	</div>
);
};

export default Navbar;
