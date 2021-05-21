import {url} from '../../../api'
import {toast} from 'react-toastify'
import jwtDecode from 'jwt-decode'
const axios = require('axios')
export const signup = (user) =>{
    console.log(user)
    return(dispatch) =>{

        axios
        .post(`${url}/signup`, user)
        .then(token => {
            localStorage.setItem("token" , token.data)
            dispatch({
                type : "SIGNUP",
              payload: token.data
            }) 
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        })
    }
}
export const signin = (user) =>{
    console.log(user)
    return(dispatch) =>{

        axios
        .post(`${url}/signin`, user)
        .then(token => {
            localStorage.setItem("token" , token.data)
            console.log(token.data)
            const user1= jwtDecode(token.data) 
            console.log("final" , user1)
            dispatch({
                type : "SIGNIN",
              payload: token.data
            }) 
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        })
    }
}
export const signout = () =>{
    localStorage.removeItem("token")
    return(dispatch) =>{
            dispatch({
                type : "SIGNOUT"
            })
        }
    }