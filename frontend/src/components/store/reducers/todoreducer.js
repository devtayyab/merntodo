const todoreducer = (state =[] , action) =>{
   console.log(state)
    switch(action.type)
    {
            case "ADD_TODO":
            return [action.todo.data, ...state]
            default:
                return state
    }
       
    }
   
export default todoreducer