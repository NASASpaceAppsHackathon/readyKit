import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const SideBarButton = (props) => {
	return (
		<Link style={{textDecoration:'none'}}to={props.link}>
			<div style={{'width':'160px', 'height':'50px', 'backgroundColor':'grey'}}>
				<h3 style={{'textAlign':'center', 'color':'white', 'verticalAlign':'middle', 'lineHeight': '50px', 'marginBottom':'1px', 'marginTop': '1px'}}>
					{props.title}
				</h3>		
			</div>
		</Link>
	);
}

export default SideBarButton;