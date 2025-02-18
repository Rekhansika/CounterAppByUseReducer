import React, { useReducer } from 'react'

const initialstate = {
  count:0
}

function reducer(state,action){
  switch(action.type){
    case "INC" : return{...state,count:state.count+action.payload};

    case "DEC" : return{...state,count:state.count-action.payload};

    default : return state;
  }
}

const App = () => {
  const[state,dispatch] = useReducer(reducer,initialstate);

  function increament(){
    dispatch({type:"INC",payload:1});

  }

  function decreament(){
    dispatch({type:"DEC",payload:1});

  }
  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={decreament}>Decreament Count</button>
      <button onClick={increament}>Increament Count</button>
      
    </div>
  )
}

export default App
