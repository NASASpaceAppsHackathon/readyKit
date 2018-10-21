import React, { Component } from 'react';
import axios from "axios"

class ContactTest extends Component {
    constructor(props) {
		super(props)
		this.state = {
            newContact: [],}
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
    }

  componentDidMount() {
    this.getContacts()
      
  }

  onSubmit(values) {
    axios.post('/api/contacts').then(res => {

      console.log(res);
  
       })
    }

  getContacts(){
     axios.get('/api/contacts').then(res => {

         
        this.setState({
         newContact: res.data.contacts })

      console.log(this.state.newContact);
})
  .catch(err => console.log(err.message));
};


  onChange(e){
    let value = e.target.value;
     let name = e.target.name;
     this.setState( prevState => {
        return { 
           newContact : {
                    ...prevState.newContact, [name]: value
                   }
        }
     }, () => console.log(this.state.newContact)
     )
  }
  render() 
  {
    const showList =() => (
        <tr>
        {this.state.newContact.map( (item) => 
            (<div> 
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td> {item.address}</td>
                </div>)

        )}
        </tr>
      );
    return (
      <div>

           {this.state.newContact.map( (item) => 
            (<div> 
                <td>{item.id}</td>
                <td> {item.name}</td>
                <td> {item.address}</td>
                </div>))}

          
        
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
        <label>Work Phone 
          <input type="number" htmlFor="workphone" name="workphone" onChange={this.onChange} />
        </label>
        <label>Home Phone 
          <input type="number" htmlFor="homephone" name="homephone" onChange={this.onChange} />
        </label>
        <label>Cell Phone
          <input type="number"  htmlFor="cellphone" name="cellphone" onChange={this.onChange} />
        </label>
        <label>Email
          <input type="email" htmlFor="email" name="email" onChange={this.onChange} />
        </label>
        <input type="submit" />
      </form>  
      </div>
    );
  }
}
export default ContactTest;
