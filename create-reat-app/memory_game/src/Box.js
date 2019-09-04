import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

class Box extends React.Component {
	static defaultProps = {
		handleClick() { }
	}
	static propTypes = {
		handleClick: PropTypes.func.isRequired
	}
	render() {
		const { color, handleClick, id} = this.props;
		return (
			<div
				onClick={() => handleClick(id)}
				className='box-default'
				style={{ backgroundColor: color }}
			></div>
		);
	}
}

export default Box;
