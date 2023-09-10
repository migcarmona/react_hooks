import React, { useReducer, useState } from 'react';
/* import ComponentA from './components/UseContext/ComponentA';
import ComponentX from './components/UseContext/ComponentX';
import ComponentZ from './components/UseContext/ComponentZ'; */
import UseStateDataFetch from './components/DataFetching/UseStateDataFetch';
import UseReducerDataFetch from './components/DataFetching/UseReducerDataFetch';
import MyMemoCounter from './components/UseMemoPractice/MyMemoCounter';
import FocusInput from './components/UseRefPractice/FocusInput';
import './App.css';
import Timer from './components/UseRefPractice/Timer';

/* export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
      case 'increment':
          return state + 1;
      case 'decrement':
          return state - 1;
      case 'reset':
          return initialState;
      default:
          return state;
  }
} */

function App() {
  /*  const [count, dispatch] = useReducer(reducer, initialState) */
  return (
    /*     <CountContext.Provider value={{countState: count, countDispatch: dispatch}}> */
    <div className="App">
      {/* <UseStateDataFetch /> */}
      {/* <UseReducerDataFetch /> */}
      {/* <MyMemoCounter /> */}
      {/* <FocusInput /> */}
      <Timer />
    </div>
  );
}

export default App;
