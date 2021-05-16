import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DoneAllTwoToneIcon from '@material-ui/icons/DoneAllTwoTone';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:'500px',
    display: 'inline-flex'
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

export default function Listtodo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Learn React
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
          author : tayyab
        </Typography>
        <Typography variant="body2" component="p">
          added : 4 days ago
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
  );
}
