
// Library code 

function createStore(reducer) {
	// state
	// get the state
	// listen to change
	// update 
	
	let state;
	let listeners = [];
	
	// 1. get the state
	const getState = () => state;
	
	// 2. change the state
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter((1) => 1 !== listener)
		}
	}
	
	// 3. update the state
	const dispatch = (action) => {
		state = reducer(state, action)
		listener.forEach((listener) => listener())
	}
	
	return {
		getState,
		subscribe,
		dispatch,
	}
}

// App code

const ADD_TODO    = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL    = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// action creators here!

function addTodoAction(todo){
	return {
		type: ADD_TODO,
		todo,
	}
}

function removeTodoAction(id) {
	return {
		type: REMOVE_TODO,
		id,
	}
}

function toggleTodoAction(id) {
	return {
		type: TOGGLE_TODO,
		id,
	}
}

function addGoalAction(goal) {
	return {
		type: ADD_GOAL,
		goal,
	}
}

function removeGoalAction(id) {
	return {
		type: REMOVE_GOAL,
		id,
	}
}

function todos (state = [], action){
	
	switch (action.type) {
		
		case ADD_TODO:
			return state.concat([action.todo]);
		case REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.id);
		case TOGGLE_TODO:
			return state.map((todo) => {
				todo.id !== action.id ? todo :
				Object.assign({}, todo, {complete: !todo.complete});
			}
		default: 
			return state;
	}
}

// reducer here!
function goals (state = [], action) {
	
	switch (action.type) {
		case ADD_GOAL:
			return state.concat([action.goal])
		case REMOVE_GOAL :
			return state.filter((goal) => goal.id !== action.id)
		default:
			return state;
	}
}

function app(state = {}, action) {
	return {
		todos: todos(state.todos, action),
		goals: goals(state.goals, action),
	}
}

const store = createState(app)

store.subscribe(() => {
	console.log('The new state is', store.getState())
}

store.dispatch(addTodoAction({
	type: 'ADD_TODO',
	todo: {
		id: 0,
		name: 'Learn Redux',
		complete: false,
	}
}));

store.dispatch(addTodoAction({
	id: 0,
	name: 'walk the dog',
	complete: false,
}))

store.dispatch(addTodoAction({
	id: 2,
	name: 'Go to the gym',
	complete: true,
}))

store.dispatch(removeTodoAction(1))

store.dispatch(toggleTodoAction(0))



