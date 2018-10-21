import React from 'react'
import './SideBar.css'
import SideBarButton from '../SideBarButton'
import ProfilePic from '../../assets/profile.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const SideBar = () => {
	return (
		<div id="sideBarBackground">
			<Link style={{textDecoration:'none'}}to="/profile">
				<div>
					<img src={ProfilePic} style={{height: '60px', width: '60px', marginLeft: '50px' }} alt="" />
					<h2 style={{textAlign:'center', 'marginTop': '5px', 'color': 'white'}}>Jane Doe</h2>
				</div>
			</Link>

			<Link style={{textDecoration:'none'}}to="/">
				<SideBarButton title='Checklists'/> 
			 </Link>

			<Link style={{textDecoration:'none'}}to="/contacts">
				<SideBarButton title='Contacts'/>
			</Link>
		</div>
	);
}

export default SideBar;