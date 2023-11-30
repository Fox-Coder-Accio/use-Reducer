import React,{useReducer, useState} from "react";


const initialState = 0

function reducer(state, actions){  // actions = {type: "increment", value: 10 }
     switch(actions.type){
          case "increment":
               return state + actions.value 
          case "decrement":
                return state - actions.value
          case "reset":
                return initialState
     }
}

const Basics = () => {
    const [count, dispatch] = useReducer(reducer, initialState)


    // dispatch("increment") => reducer(count, "increment")
        

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type: "increment", value: 1 })}>Increment by 1</button>
            
            <button onClick={()=>dispatch({type: "increment", value: 5 })}>Increment by 5</button>

            <button onClick={()=>dispatch({type: "increment", value: 10 })}>Increment by 10</button>

            <button onClick={()=>dispatch({type: "decrement", value: 10 })}>Decrement</button>

            <button onClick={()=>dispatch({type: "reset"})}>Reset</button>

        </div>
    )
}

export default Basics;




