import React, { Component } from 'react';
import './App.css';
// https://www.ring.com/form-submit.php


class App extends Component {
state = {
  firstname:'',
  lastname:'',
  address:'',
  phone:null,
  email:''
}
handleChange = (e) => {
  console.log(e.target.name, e.target.value);
  this.setState({[e.target.name]: e.target.value})
}
handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
  // const subData = {...this.state}
}
  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={this.state.firstname} name="firstname" onChange={this.handleChange}/>

        <label>Last Name:</label>
        <input type="text" value={this.state.lasttname} name="lastname" onChange={this.handleChange}/>

        <label>Address:</label>
        <input type="text" value={this.state.address} name="address" onChange={this.handleChange}/>

        <label>Phone Number:</label>
        <input type="tel" value={this.state.firstname} name="firstname" onChange={this.handleChange}/>

        <label>Email:</label>
        <input type="email" value={this.state.firstname} name="firstname" onChange={this.handleChange} />

        <input type="submit" value="Submit" />
      </form>

      </div>
    );
  }
}

export default App;
