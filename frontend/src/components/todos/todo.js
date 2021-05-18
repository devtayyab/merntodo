import React, {useState} from 'react'
import Addtodo from './addtodo'
import Listtodo from './Listtodo'
export default function Todo() {
    const [todo, settodo]= useState({
        name : "",
        iscomplete: false
      })
    return (
        <div>
            <Addtodo todo = {todo} settodo= {settodo}/>
            <Listtodo  todo = {todo} settodo= {settodo}/>
        </div>
    )
}
