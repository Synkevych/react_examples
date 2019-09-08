import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators';

const initialState = {
	todos: [],
	id: 0,
	completed: false
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			let newState = { ...state };
			newState.id++;
			return {
				...newState,
				todos: [...newState.todos, { task: action.task, id: newState.id, completed: false }]
			};
		case REMOVE_TODO:
			let todos = state.todos.filter(val => val.id !== action.id);
			return { ...state, todos };
		case UPDATE_TODO:
			let newTodos = state.todos.filter(val => {
				if(val.id === action.id){
					val.completed = !val.completed;
					return val;
				} return val;
			});
			return { ...state, newTodos };
		default:
			return state;
	}
}
