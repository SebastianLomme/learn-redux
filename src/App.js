import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { increment, decrement } from "./actions";


function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispath = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispath(increment())}>+</button>
      <button onClick={() => dispath(decrement())}>-</button>
      
      {isLoggedIn ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>}
    </div>
  );
}

export default App;
