import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Addtodo from './addtodo'
import Listtodo from './Listtodo'
export default  function Todo() {
    const  auth= useSelector(state => state.user)

    const [todo, settodo]= useState({
        name : "",
        iscomplete: false
      })
      useEffect(()=>{
        console.log("updated")
       
      },[auth])
      if(!auth.token) return <Redirect to="/signin"/>
    return (
        <div>
            <Addtodo todo = {todo} settodo= {settodo}/>
            <Listtodo  todo = {todo} settodo= {settodo}/>
        </div>
    )
}
