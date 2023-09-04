export const TodoList=()=>{

    const onHandleClick=({target})=>{
        console.log(target.value);
    }

    const initialTodos = [
        {id:1, title:'Todo1'},
        {id:2, title:'Todo2'},
        {id:3, title:'Todo3'},
        {id:4, title:'Todo4'}
    ];
    return(
        <>
        <div> 
            <h2> Todo List</h2>
            
            <ul>
            {initialTodos.map(e=>
                <li key = {e.id}> {`${e.id}.- ${e.title}`} 
                <button
                value={e.id}
                onClick={(e)=>onHandleClick(e)}
                >Delete ({e.id}) </button>  
                </li>                
                )}
            </ul>
        </div>
            </>
    )
}
export default TodoList;