import React from 'react'
import './SideBar.css'
import SideBarButton from '../SideBarButton'
import Pic from '../../assets/profile.png'

const SideBar = () => {
	return (
		<div id="sideBarBackground">
			<img src={Pic} style={{height: '60px', width: '60px', marginLeft: '50px' }} alt="" />
			<h2 style={{textAlign:'center', 'marginTop': '5px'}}>Name</h2>
			<SideBarButton/>
		</div>
	);
}

export default SideBar;