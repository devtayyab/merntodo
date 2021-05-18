const todoreducer = (state =[] , action) =>{
   console.log(action)
    switch(action.type)
    {
        case "GET_TODO":
             
            return action.todos.data 
            case "ADD_TODO":
            return [action.todo.data, ...state]
            case "UPDATE_TODO":
                return console.log(action)
            default:
                return state
    }
       
    }
   
export default todoreducer