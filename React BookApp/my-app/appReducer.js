const subscribe = (listener) => {
	listener.push(listener)
	return () => {
		listener = listener.filter((l) => l !== listener)
	}
}

var appReducer = function(state, action){
	if (action.type === DELETE_FLAVOR) {
		var newState = [];
		state.map((item) => {
			if (item.flavor !== action.flavor) {
				newState.push(item)
			}
		})
		return newState;
	}
	return state;
}

