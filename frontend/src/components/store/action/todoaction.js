import {url} from '../../../api'
import {toast} from 'react-toastify'
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
        console.log(error)
        toast.error(error.response?.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        })
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
                todo
            }) 
        })
        .catch(error=>{
        console.log(error.messages)
        })
    }
}
export const updatetodo = (updatedtodo,id) =>{
    console.log(updatedtodo)
    return(dispatch) =>{

        axios
        .put(`${url}/todos/${id}`, updatedtodo)
        .then(todo => {
                console.log(todo)
            dispatch({
                type : "UPDATE_TODO",
                 updatedtodo
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
export const checkedtodo = (id) =>{
    
    return(dispatch) =>{

        axios
        .patch(`${url}/todos/${id}`, {})
        .then(todo => {
            dispatch({
                type : "CHECKED_TODO",
                todo
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
export const deletetodo = (id) =>{
    
    return(dispatch) =>{

        axios
        .delete(`${url}/todos/${id}`)
        .then(() => {
            dispatch({
                type : "DELETE_TODO",
                id
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