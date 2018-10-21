import React from 'react'

const SideBarButton = (props) => {
	return (
			<div style={{'width':'160px', 'height':'50px', 'backgroundColor':'grey'}}>
				<h3 style={{'textAlign':'center', 'color':'white', 'verticalAlign':'middle', 'lineHeight': '50px', 'marginBottom':'1px', 'marginTop': '1px'}}>
					{props.title}
				</h3>		
			</div>
	);
}

export default SideBarButton;