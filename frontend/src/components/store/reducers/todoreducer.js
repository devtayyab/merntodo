const todoreducer = (state =[] , action) =>{
   console.log(action)
    switch(action.type)
    {
        case "GET_TODO":
             
            return action.todos.data 
            case "ADD_TODO":
            return [action.todo.data, ...state]
            default:
                return state
    }
       
    }
   
export default todoreducer