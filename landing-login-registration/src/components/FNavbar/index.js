import React from "react";
import './index.css';
import info_icon from './info.png';
import skills_icon from './skills.png';
import uploads_icon from './uploads.png';
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
		<NavLink to="/freelancer_navpage1" activeStyle>
            <img className="image_nav" src={info_icon} ></img>
			About you
		</NavLink>
		<NavLink to="/freelancer_navpage2" activeStyle>
            <img className="image_nav" src={skills_icon}></img>
			Skills
		</NavLink>
		<NavLink to="/freelancer_navpage3" activeStyle>
            <img className="image_nav" src={uploads_icon}></img>
			Uploads & Links
		</NavLink>
		<NavLink to="/freelancer_navpage4" activeStyle>
            <img className="image_nav" src={security_icon}></img>
			Security
		</NavLink>
		</NavMenu>
	</Nav>
	</div>
);
};

export default Navbar;
