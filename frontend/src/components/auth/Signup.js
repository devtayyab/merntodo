import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Card} from '@material-ui/core'
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

  return (
      <Card>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" />
      <br/>
      <TextField id="standard-basic" label="Email" />
      <br></br>
      <TextField id="standard-basic" label="Password" />
      <br/>
        <Button>SignUp</Button>
      
    </form>
    </Card>
  );
}
