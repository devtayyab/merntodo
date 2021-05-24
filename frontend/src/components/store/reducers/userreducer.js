import {toast} from 'react-toastify'
import jwtDecode from 'jwt-decode'
var IntialState = {
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
           return user , state,{token : action.payload}
           case "SIGNIN":
            toast("WELLCOME" , {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            const loguser= jwtDecode(action.payload)
            return  {token : action.payload}
            case "SIGNOUT":
                toast("GoodBye" , {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                
                return {token: null}
           default:
            return IntialState = {
                token : localStorage.getItem("token"),
                name : null,
                email : null,
                password  :null 
            }
     }
    
       
}
export default userreducer