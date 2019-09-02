import React from 'react'
import './Box.css'

const Box = props =>{

	return (
		<div className="box-default" style={{backgroundColor: props.color}}></div>
	);
};

export default Box;