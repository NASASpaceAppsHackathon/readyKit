import React from 'react'
import './SideBar.css'
import SideBarButton from '../SideBarButton'
import Pic from '../../assets/profile.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const SideBar = () => {
	return (
		<div id="sideBarBackground">
			<Link style={{textDecoration:'none'}}to="/profile">
				<div>
					<img src={Pic} style={{height: '60px', width: '60px', marginLeft: '50px' }} alt="" />
					<h2 style={{textAlign:'center', 'marginTop': '5px', 'color': 'white'}}>Name</h2>
				</div>
			</Link>
			<SideBarButton title='Checklists'/>	
			<Link style={{textDecoration:'none'}}to="/contacts">
				<SideBarButton title='Contacts'/>
			</Link>
		</div>
	);
}

export default SideBar;