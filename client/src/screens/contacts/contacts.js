import React, { Component } from 'react'
import './contacts.module.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 

class Contacts extends Component {
	constructor(props) {
		super(props)
		this.state = {
            newContact: [],}
    
    }

  componentDidMount() {
    this.getContacts()
      
  }

  getContacts(){
     axios.get('/api/contacts').then(res => {

         
        this.setState({
         newContact: res.data.contacts })

      console.log(this.state.newContact);
})
  .catch(err => console.log(err.message));
};

  render() 
  {
		return (
			<div className="contactsBackground">
				<table>
  				<tr>
				<th>Name</th>
				<th>Address</th>
				<th>City</th>
				<th>Actions</th>
				</tr>
				{this.state.newContact.map( (item) => 
            (<tr> 
                <td>{item.name}</td>
                <td> {item.address}</td>
                <td> {item.city}</td>
				<td><button><Link to={`edit/${item.name}`}>Edit</Link></button>
					<button><Link to={`delete/${item.name}`}>Delete</Link></button>
				</td>
                </tr>)

        )}
			</table>
			<Link to="/new">Add a new Contact</Link>

			
			</div>
		);
	}
}

export default Contacts;