import React from 'react';
import './Box.css';

const Box = ({ color }) => {
	let style = {
		backgroundColor: color
	};
	return <div className='box-default' style={style}></div>;
};

export default Box;
