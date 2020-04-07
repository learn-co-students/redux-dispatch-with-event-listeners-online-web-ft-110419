// add code snippets from README
let state;
let btn = document.querySelector("#button")
let btn2 = document.querySelector("#button2")
let incres = "INCREASE"
let decres = "DECREASE"
function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE':
            return { count: state.count += 1 }
            break;
        case 'DECREASE':
            return { count: state.count -= 1 }
            break
        default:
            return state
    }
}

function render() {
    document.querySelector("#container").innerHTML = state.count
}
function dispatch(action) {
    state = reducer(state, action)
    render()
}

btn.addEventListener("click", () => dispatch({ type: incres }))
btn2.addEventListener("click", () => dispatch({ type: decres }))












dispatch({ type: "default state" })