import React from 'react'
import './SideBar.css'
import Pic from '../../assets/profile.png'

const SideBar = () => {
	return (
		<div id="sideBarBackground">
			<img src={Pic} style={{height: '60px', width: '60px' }} alt="" />
		</div>
	);
}

export default SideBar;