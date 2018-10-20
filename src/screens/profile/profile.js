import React, { Component } from 'react'
import Pic from '../../assets/profile.png'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'Jane Doe',
            email: 'jane.doe@gmail.com',
            password: '*******',
            country: 'Canada',
            city: 'Waterloo',
            address: '121 Street West',
            postalCode: 'M1C 2N2',
            checkLists: { earthquake: '1', volcano: '0', tsunami: '1', tornado: '1'},
        }
    }

    render(){
        const Header =() =>(
            <div>
            <div style={{display:'inline-block', verticalAlign:'top'}}>
                <img src={Pic} alt="" style={{ width: '50%',paddingLeft: '5%', padding: '3%'}}/>
            </div>
            <div style={{display:'inline-block'}}>
                <h1>{this.state.name}</h1> 
                <h1>{this.state.email}</h1> 
            </div>
            </div>
        )
        return (
            <div>
                <Header />
            </div>
        )
    }

}
export default Profile;