import React from 'react';

//rafc
const Todo = ({ task, removeTodo, completed, toggleTodo }) => {
	console.log("completed",completed);
	return (
		<li
			style={{
				textDecoration: completed ? 'line-through' : 'none'
			}}
			onClick={toggleTodo}
		>
			{task}
			<button onClick={removeTodo}>x</button>
		</li>
	);
};

export default Todo;
