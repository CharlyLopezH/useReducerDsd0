import { useReducer, useState } from "react";

const reducer=(state, action)=>{    
    console.log(action.type);
    switch(action.type) {
        case types.delete: 
            return state.filter(todo=>todo.id !=action.payload);           
        case types.add:            
            return [...state,action.payload]
        case types.update:{ 
            const todoEdit = action.payload;
            return state.map(todo=>todo.id===todoEdit.id ? todoEdit:todo)
        }            
    default: state;
}
}

//Types disponibles para los dispatch
const types={
    add: 'ADD',
    update: 'UPDATE',
    delete:'DELETE'
}

export const TodoList=()=>{

    const initialTodos = [
        {id:1, title:'Todo1'},
        {id:2, title:'Todo2'},
        {id:3, title:'Todo3'},
        {id:4, title:'Todo4'}
    ];

    const [todos,dispatch]=useReducer(reducer,initialTodos);

    const [text,setText]=useState('');

    const onHandleSubmit =(e)=> {     
        e.preventDefault();                
        const newTodo = {id: Date.now(), title: text}        
        dispatch({
            type:types.add, 
            payload: newTodo
        });
    }

    return(
        <>
        <div> 
            <h2> Todo List</h2>
            
            <ul>
            {todos.map(todo=>
                <li key = {todo.id}>
                 {todo.title}
                <button
                value={todo.id}
                onClick={()=>dispatch(
                                    {type:types.delete,
                                     payload: todo.id})}
                >Borrar </button>  
                
                <button onClick={()=>dispatch({
                        type:types.update,
                        payload: {...todo,title:text}
                        })}>
                    Update 
               </button>  

                </li>                
                )}
            </ul>
            <hr/>
        </div>
        <form onSubmit={onHandleSubmit}>
        <input 
              placeholder="Todo"
              value={text}
              onChange={e=>setText(e.target.value)}
            />
        </form>
            </>
            
    )
}
export default TodoList;