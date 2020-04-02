// add code snippets from README
let state 

function reducer(state={count: 0}, action) {
	switch (action.type){
		case 'INCREASE_COUNT': 
			return {count: state.count + 1}
		case 'DECREASE_COUNT':
			return {count: state.count - 1}
		default:
			return state 
	}
}

function dispatch(action, node) {
	state = reducer(state, action)
	render(node)
}

function render(node) {
	console.log(node)
	node.innerHTML = `<p>${state.count}</p>`
}

let button = document.getElementById("button")
document.addEventListener("DOMContentLoaded", () => {
	button.addEventListener("click", () => {
		dispatch({type: 'INCREASE_COUNT'}, button)
	})
})

dispatch({type: '@@INIT'}, button)