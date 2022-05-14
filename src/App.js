import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {decNumber, incNumber} from './actions/index'
import './App.css'


function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className='App'>
        <h1>React Redux Increment Decriment Counter</h1>
        <div className='counter'>
           <div className="value">{myState}</div>
           
        
        </div>
        <div className='incDecContainer'>
          <span className='incDec' onClick={ ()=> dispatch(incNumber())  } >+</span>
          <span className='incDec' onClick={ ()=> dispatch(decNumber())  } >-</span>
        </div>
    </div>
  )
}

export default App