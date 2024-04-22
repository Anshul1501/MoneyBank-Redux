//Add Amount in State
export const depositMoney = (amount) => {

    return (dispatch) => { // return take a function and return a funtion that take dispatch
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }

}

//Subtract Amount in State
export const withdrawMoney = (amount) => {

    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }

}