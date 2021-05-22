import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {gettodo} from '../store/action/todoaction'
import Todos from './todos'
export default function Listtodo({settodo}) {
 
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos)
  console.log(todos)
  useEffect(() => {
   
   dispatch(gettodo())
  }, [dispatch,todos])

  return (

      <div>
            {todos.length >0 ? "The Todos" : 'No todos Available'}
            <br></br>
            {todos.map((todo)=>{
              return(
                <Todos todo={todo} key={todo._id} settodo={settodo} ></Todos>
              )
            })}
       
        </div>
  );
}
