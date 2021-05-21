import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {signout} from '../store/action/useraction'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useHistory} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(user) {
  console.log(user)
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  var user1 = localStorage.getItem("token")
  
  if (user1){
    var user1 = jwtDecode(user1)
  }else{
    const user1 = {
      name : ""
    }
  }
   
const history = useHistory()
  const handleClose = () => {
    setAnchorEl(null);
    dispatch(signout)
     };
 

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todos
          </Typography>
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
          {!auth.token && (
            <div>
                <Button onClick={()=>history.push('/signin')} > LogIn</Button>
                <Button onClick={()=>history.push('/signup')} > SignUp</Button>
            </div>
          )}
          {auth.token && (
            <div>
              <p>{user1.name ? user1.name : null}</p>
               <Button onClick={handleClose}>SignOut</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
