import React, { Component } from 'react'

class Contacts extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "Dean Winchester",
			address: "123 Kansas Road",
			city: "Kansas",
			workPhone: "123-456-456",
			homePhone: "123-456-678",
			cellPhone: "123-456-567",
			email: "dean@gmail.com"
		}
	}

	render() {
		return (
			<div>
			
			</div>
		);
	}
}

export default Contacts;