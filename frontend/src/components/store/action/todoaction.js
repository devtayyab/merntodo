import {url} from '../../../api'
const axios = require('axios')
export const gettodo = () =>{
    // console.log(todo)
    return(dispatch, getstate) =>{

        axios
        .get(`${url}/todos`)
        .then(todos => {
            dispatch({
                type : "GET_TODO",
                todos
            }) 
        })
        .catch(error=>{
        console.log(error.response)
        })
    }
}
export const addtodo = (todo) =>{
    console.log(todo)
    return(dispatch, getstate) =>{

        axios
        .post(`${url}/todos`, todo)
        .then(todo => {
            dispatch({
                type : "ADD_TODO",
                ...todo
            }) 
        })
        .catch(error=>{
        console.log(error.response)
        })
    }
}