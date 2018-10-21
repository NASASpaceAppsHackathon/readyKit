import React, { Component } from 'react';



class Test extends Component {
  state = {
    response: {}
  };

  componentDidMount() {
    this.callApi()
      .then (res => {        
        console.log(JSON.parse(res.data))
        this.setState({
          response : JSON.parse(res.data)
        })
          console.log(this.state.response);
      })
      .catch(err => console.log(err.message));
  }

  callApi = async () => {
    const response = await fetch('/api/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div>
        {/* <p>{this.state.response}</p> */}
      </div>
    );
  }
}
export default Test;
