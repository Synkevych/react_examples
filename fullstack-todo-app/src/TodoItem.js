import React from 'react'
import PropTypes from 'prop-types'

import './TodoItem.css'

const TodoItem = ({name, completed, onDelete, onToggle}) => {
	console.log("name",name);
	return (<div>
		<li
			style={{
				textDecoration: completed ? 'line-through': 'none'
			}}
			onClick={onToggle}
		>
			{name}
		</li>
			<span onClick={onDelete}> X</span>
	</div>)
}

TodoItem.propTypes = {
	name: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}

export default TodoItem
