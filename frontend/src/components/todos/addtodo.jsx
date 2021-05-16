import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { Button , Card, Paper} from '@material-ui/core';

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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Card>
      <TextField id="standard-basic"
       label="Enter Todo"
       autoFocus="true"
       onChange={(e)=>e}
        />
    <Button >
     <SendIcon color='primary'></SendIcon>
     </Button>
     </Card>
    </form>
  );
}
