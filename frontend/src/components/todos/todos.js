import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DoneAllTwoToneIcon from '@material-ui/icons/DoneAllTwoTone';
import moment from 'moment'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:'500px',
    display: 'inline-flex',
    margin:'8px'
  },
  bullet: {
    
  },
  action:{
    display: 'block'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Todos =(todo)=>{

    const classes = useStyles();
return (
    <Card className={classes.root}>
      
    <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Learn React
      </Typography>
     
      <Typography className={classes.pos} color="textSecondary">
        author : {todo.todo.name}
      </Typography>
      <Typography variant="body2" component="p">
        added : {moment(todo.todo.date).fromNow()}
        <br />
      </Typography>
    </CardContent>
    <CardActions className={classes.action}>
      <Button size="small" className={classes.bullet}>
      <DeleteSweepIcon/>
      </Button>
      <Button size="small" className={classes.bullet}>
      <EditTwoToneIcon/>
      </Button>
      <Button size="small" className={classes.bullet}>
      <DoneAllTwoToneIcon/>
      </Button>
    </CardActions>
  </Card>
)
}
export default Todos