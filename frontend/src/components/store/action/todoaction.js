import {url} from '../../../api'
const axios = require('axios')
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