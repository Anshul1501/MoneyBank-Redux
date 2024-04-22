//play with amount
const reducer = (state = 0, action) => {
    //funtion takes initial state

    if (action.type === "deposit") {
        return state + action.payload;
    } else if (action.type === "withdraw") {
        return state - action.payload;
    } else {
        return state;
    }
};
export default reducer;