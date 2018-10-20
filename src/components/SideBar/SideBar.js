import React from 'react'
import './SideBar.css'
import SideBarButton from '../SideBarButton'
import Pic from '../../assets/profile.png'

const SideBar = () => {
	return (
		<div id="sideBarBackground">
			<img src={Pic} style={{height: '60px', width: '60px', marginLeft: '50px' }} alt="" />
			<h2 style={{textAlign:'center', 'marginTop': '5px', 'color': 'white'}}>Name</h2>
			<SideBarButton title='Checklist'/>
			<SideBarButton title='Contacts'/>
		</div>
	);
}

export default SideBar;