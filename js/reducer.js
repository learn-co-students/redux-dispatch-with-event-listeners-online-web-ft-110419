// add code snippets from README
let state;
let btn = document.querySelector("#button")
let btn2 = document.querySelector("#button2")
let incres = "INCREASE"
let decres = "DECREASE"
function changeState(state = { count: 0 }, action) {
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
function dispatch(action) {
    state = changeState(state, action)
}

btn.addEventListener("click", () => {
    dispatch({ type: incres })
    document.querySelector("#container").innerHTML = state.count
})
btn2.addEventListener("click", () => {
    dispatch({ type: decres })
    document.querySelector("#container").innerHTML = state.count
})












dispatch({ type: "default state" })