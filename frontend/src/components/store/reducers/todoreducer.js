import {toast} from 'react-toastify'
const todoreducer = (state =[] , action) =>{
   console.log(action)
   console.log(state)
    switch(action.type)
    {
        case "GET_TODO":
            
            return action.todos.data 

            case "ADD_TODO":
                toast.success("Todo is added", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            return [action.todo.data, ...state]
            case "UPDATE_TODO":
                toast.success("Todo is UPDATED", {
                    position: toast.POSITION.BOTTOM_RIGHT
                }) 
                
                // return state.map((todo)=>{
                //     todo._id === action.todos.data._id ? action.todos : todo 
                // })
                case "CHECKED_TODO":
                    toast.success("Todo is COMPLETED", {
                        position: toast.POSITION.BOTTOM_RIGHT
                    })
                    return state.map((todo)=>{
                        todo._id = action.todo._id ? action.todo :todo
                    })
                    case "  DELETE_TODO":
                        toast.success("Todo is DELETED", {
                            position: toast.POSITION.BOTTOM_RIGHT
                        })
                        // return state.filter((todo)=>{
                        //     todo._id !== action.todo._id
                        // })
            default:
                return state  
    }
       
    }
   
export default todoreducer