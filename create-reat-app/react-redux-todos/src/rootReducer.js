import { GET_TODOS, ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators';

const initialState = {
	todos: [],
	completed: false
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TODOS:
			return {...state, todos: action.data}
		case ADD_TODO:
			return {...state, todos: [...state.todos, action.todo]};
		case REMOVE_TODO:
			let todos = state.todos.filter(val => val._id !== action.id);
			return { ...state, todos };
		// case UPDATE_TODO:
		// 	let newTodos = state.todos.filter(val => {
		// 		if(val.id === action.id){
		// 			val.completed = !val.completed;
		// 			return val;
		// 		} return val;
		// 	});
		// 	return { ...state, newTodos };
		default:
			return state;
	}
}
