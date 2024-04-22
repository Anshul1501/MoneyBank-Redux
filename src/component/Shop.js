import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state '

const Shop = () => {

     const dispatch = useDispatch();
    // const action = bindActionCreators(actionCreators, dispatch);   //passing all the methods to bindActionCreators through dipatch, dispatch => has withdrawMoney() and deportMoney()
    
    // distructuring instead of action 
        const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2> Deposite/Withdraw money </h2>

           {/*  without using bindActionCreators
          
            <button className='btn btn-dark me-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>-</button>
            
                    Update Balance
            
            <button className='btn btn-dark mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}} style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>+</button>
    */} 

    <button className='btn btn-dark me-2' onClick={()=>{withdrawMoney(100)}} style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>-</button>
            
            Update Balance
    
    <button className='btn btn-dark mx-2' onClick={()=>{depositMoney(100)}} style={{'--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem'}}>+</button>
        </div>
    )
}

export default Shop
