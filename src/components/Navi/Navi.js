import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import {SideNav, SideNavItem, Button, Icon} from 'react-materialize'
// import './Navi.css';
class Navi extends Component {
    render() {
        return (
            <div>
                <SideNav
	trigger={<Button>|||</Button>}
	options={{ closeOnClick: true }}
	>
	<SideNavItem userView
		user={{
			background: 'img/office.jpg',
			image: 'img/yuna.jpg',
			name: 'John Doe',
			email: 'jdandturk@gmail.com'
		}}
	/>
	<SideNavItem href='#!icon' icon='cloud'><Link to="/vup/home" className="navbar-brand">Home</Link></SideNavItem>
	
	<SideNavItem divider />
	<SideNavItem subheader>User</SideNavItem>
	<SideNavItem waves href='#!third'>Profile</SideNavItem>
</SideNav>
            </div>
        );
    }
}

export default Navi;