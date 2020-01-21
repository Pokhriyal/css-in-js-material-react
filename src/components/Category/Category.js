import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardOne from './Card';
import FilterComponent from './Filter';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop:20,
    display:'flex'
  },
  filter_section: {
      width:200
  },
  result_section: {
        width:'100%',
        background:' #383838',
        padding: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    background: '#5d5c5c'
  },
}));

export default function CenteredGrid({characters, handleStatusChange}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>

    <Grid container spacing={3}>
        <Grid item xs={12} lg={2}>
            <FilterComponent handleStatusChange={handleStatusChange} />
        </Grid>
        <Grid item xs={12} lg={10}>
            <div className={classes.result_section}>
                <Grid container spacing={3}>
                    {characters.hasOwnProperty('results')? characters.results.map((character, index)=>{
                       // console.log(character)
                        return (
                            <Grid key={index} item xs={6} lg={3}>
                                <Paper className={classes.paper}>
                                    <CardOne character={character} />
                                </Paper>
                            </Grid>
                        )
                    }):null 
                    }
                </Grid>
            </div>
        </Grid>
    </Grid>

    


        
      

    </div>
  );
}
