import React, {Component} from 'react'

const SideBarButton = (props) => {
	return (
			<div style={{'width':'160px', 'height':'50px', 'backgroundColor':'grey',}}>

				<img src={props.img} alt='' style={{float: 'left', height:'20px', width:'20px', 'marginTop':'15px'}} />
				<h3 style={{'textAlign':'center', 'color':'white', 'verticalAlign':'middle', 'lineHeight': '50px', 'marginBottom':'1px', 'marginTop': '1px', position:'static'}}>
					{props.title}
				</h3>
			</div>
	);
}

export default SideBarButton;