import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Redirect,useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Card} from '@material-ui/core'
import {signin} from '../store/action/useraction'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Signin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(state => state.user)
  console.log(auth)
  const classes = useStyles();
  const [user, setuser] = useState({
    email : "",
    password : ""
  })
  const LogIn = (e)=>{
    // e.preventDefault()
    dispatch(signin(user))
    history.goBack();
  }
  if (auth.token) return <Redirect to="/"></Redirect>
  return (
      <Card>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Email" 
       value={user.email} 
       onChange={(e)=>setuser({...user, email: e.target.value})} />
      <br/>
      <TextField id="standard-basic" label="Password"
      value={user.password} 
      onChange={(e)=>setuser({...user, password: e.target.value})} />
   <br></br>
        <Button onClick={()=>LogIn()}>LogIn</Button>
      
    </form>
    </Card>
  );
}
