import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Button , Card, Paper} from '@material-ui/core';
import {addtodo} from '../store/action/todoaction'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
  
      maxWidth:'500px',
      display: 'inline-table'
    },
    form:{
     
    }
  },
}));

export default function Addtodo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todo, settodo]= useState({
    name : "",
    iscomplete: false
  })
const handleChange =(e) =>{
    e.preventDefault()
    console.log(todo)
    dispatch(addtodo(todo))
    settodo({
      name : "",
      iscomplete: false
    })

}

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleChange}>
      <Card>
      <TextField id="standard-basic"
       label="Enter Todo"
       autoFocus={true}
       value ={todo.name}
       onChange={(e)=>settodo({...todo , name : e.target.value , date : new Date()})}
        />
    <Button type='submit'>
     <SendIcon color='primary'></SendIcon>
     </Button>
     </Card>
    </form>
  );
}
