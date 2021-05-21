import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux'
import {signup} from '../store/action/useraction'
import TextField from '@material-ui/core/TextField';
import {Button, Card} from '@material-ui/core'
import {Redirect} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch=useDispatch()
  const auth=useSelector(state=> state.user)
 
  const [user , setuser] = useState({
    name:"",
    email : "",
    password : ""
  })
  const handleChange=()=>{
      dispatch(signup(user))
      console.log(user)
      console.log(auth)
  }
  if (auth.token) return <Redirect to="/"></Redirect>
  return (
      <Card>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic"
       label="Name"
       value= {user.name}
       onChange={(e)=>setuser({...user, name: e.target.value})}
       />
      <br/>
      <TextField id="standard-basic1" label="Email"  
        value= {user.email}
        onChange={(e)=>setuser({...user, email: e.target.value})}
      />
      <br></br>
      <TextField id="standard-basic2" label="Password"
       value= {user.password}
       onChange={(e)=>setuser({...user, password: e.target.value})}
      />
      <br/>
        <Button onClick={()=>handleChange()}>SignUp</Button>
      
    </form>
    </Card>
  );
}
