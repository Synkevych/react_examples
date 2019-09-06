import React from 'react'
import PropTypes from 'prop-types'

// rafce raft

const TodoItem = ({name, completed}) => {
	console.log("name",name);
	return (
		<li
			style={{
				textDecoration: completed ? 'line-through': 'none'
			}}
		>
			{name}
		</li>
	)
}

TodoItem.propTypes = {
	name: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}

export default TodoItem
