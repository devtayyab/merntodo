import {toast} from 'react-toastify'
import jwtDecode from 'jwt-decode'
const IntialState = {
    token : localStorage.getItem("token"),
    name : null,
    email : null,
    password  :null 
}
const userreducer = (state = IntialState , action)=>{
    console.log(action)
    console.log(state)
     switch (action.type){
         case "SIGNUP":
             toast("WELLCOME" , {
                 position: toast.POSITION.BOTTOM_RIGHT
             })
           const user= jwtDecode(action.payload) 
           console.log(user)
           return user , state
           case "SIGNIN":
            toast("WELLCOME" , {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            const loguser= jwtDecode(action.payload)
            return  loguser , state
            case "SIGNOUT":
                toast("GoodBye" , {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                
                return state
           default:
            return state
     }
    
       
}
export default userreducer