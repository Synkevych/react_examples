 import React, { Component } from 'react';
 import './Pet.css';

  class HobbyList extends React.Component {
    render(){
          const style = { fontSize: '1.5em'};
    // a list of JSX componnet 
          const hobbies = [ "Sleeping", "Eating", "Cudding"];
      return (
       <ul>
        	{hobbies.map( (hobbie,i) => {
       			return <li style={style} key={i}> {hobbie} </li> 
  			})}
        </ul>
      );
    }
  }
  
  class Pet extends React.Component {
  render(){
    return (
      <div className="card">
        <h2>Moxie</h2>
        <img src="https://purr.objects-us-east-1.dream.io/i/daVkj.jpg" alt="moxie my cat" />
        <h5 className="name" style={{fontSize: '2em', margin: '2px'}}>Hobbies: </h5>
       	<HobbyList/>
      </div>
    )
 }
}

export default Pet;