import { useReducer } from "react"


const reduce=(state, action )=>{ 
    console.log('Action: '+action.type)
    switch(action.type){
        case 'INCREMENT': state++ 
        break;

        case 'DECREMENT': state-- 
        break;

        default:
            state=0;
    }
    return state;
}


export const Counter=()=>{

    const [count, dispatch] = useReducer(reduce,0);    

    return(        

        <>
        <h2>Vite + React</h2>

        <h1>Contador is {count}</h1>

        <div className="card">
          <button onClick={() => dispatch({type:'INCREMENT'})}>
            Incrementar
          </button>

          <button onClick={() => dispatch({type:'DECREMENT'})}>
            Decrementar
          </button>

          <button onClick={() => dispatch({type:'RESET'})}>
            Poner en 0
          </button>


          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>  
    )
}