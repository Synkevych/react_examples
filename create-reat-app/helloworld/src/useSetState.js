import React from 'react';
import PropTypes from 'prop-types';

const InstructorItem = props => {
	return(
		<li>
			<h3>{props.name}</h3>
			<h4> Hobbies: {props.hobbies.join(", ")}</h4>
		</li>
	)
}

InstructorItem.propTypes = {
	name: PropTypes.string,
	hobbies: PropTypes.arrayOf(PropTypes.string)
};

export default class SetState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			instructors: [
				{
					name: 'Tim',
					hobbies: ['sailing', 'react']
				},
				{
					name: 'Matt',
					hobbies: ['math', 'd3']
				},
				{
					name: 'Colt',
					hobbies: ['css', 'hiking']
				},
				{
					name: 'Elie',
					hobbies: ['music', 'es2015']
				}
			]
		};
		
		setTimeout( () => {
			const randInt = Math.floor(Math.random() * this.state.instructors.length);
			const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randInt].length);
			
			const instructors = this.state.instructors.map( (inst, i) => {
				if (i === randInt) {
					const hobbies = [...inst.hobbies];
					hobbies.splice(hobbyIndex, 1);
					return{
						...inst,
						hobbies
					};
				 }
				 return inst;
				});
			// instructors[randInt] = Object.assign( {}, instructors[randInt])
			// instructors[randInt].hobbies = instructors[randInt].hobbies.slice();
			// console.log("randInt",instructors[randInt].hobbies);
			// instructors[randInt].hobbies.splice(hobbyIndex, 1);
			this.setState({instructors});
		}, 2000 );
	}
	render() {
		const instructors = this.state.instructors.map((instructor, index) => (
			<InstructorItem
				key={index}
				name={instructor.name}
				hobbies={instructor.hobbies}
			/>
		));
		return (
			<div className='App'>
				<ul>{instructors}</ul>
			</div>
		);
	}
}
