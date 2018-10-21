import React, { Component } from 'react'
import style from './contacts.module.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AddContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newContact: []
    }
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount() {
   
  }

  getContacts() {
    axios
      .get('/api/contacts')
      .then(res => {
        this.setState({
          newContact: res.data.contacts
        })

        console.log(res.data.contacts)
      })
      .catch(err => console.log(err.message))
  }

  onSubmit(){

  }
  render() {
    return (
        <div className="formback">
       
     
     <form onSubmit={this.onSubmit}>
     <label>Name 
       <input type="text" htmlFor="name" onChange={this.onChange} name="name" value = {this.state.newContact.name}/>
     </label>
     <label>Address 
       <input type="text" htmlFor="address" onChange={this.onChange} name="address" value={this.state.newContact.address}/>
     </label>
     <label>City 
       <input type="text" htmlFor="city" onChange={this.onChange} name="city"/>
     </label>
     
     <input type="submit" />
   </form>  
   </div>
    )
  }
}

export default AddContact;
