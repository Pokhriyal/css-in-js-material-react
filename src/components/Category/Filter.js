import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    margin: '0 0 20px 0',
    '& .checkbox_style': {
        '& span': {
            fontSize:'13px',
            paddingBottom: '2px',
            paddingTop: '2px'
        }
    }
  },
}));

export default function CheckboxesGroup({handleStatusChange}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    human: false,
    mytholog: false,
    species: false,
  });
  const handleChange = (event) => {
      let { checked } = event.target
      if(checked){
        handleStatusChange('species' ,'Human')
      }
      else{
        handleStatusChange('species' ,'')
      }
    //   handleStatusChange('species' ,'Human')
  }

//   const handleStatusChange = name => event => {
//     setState({ ...state, [name]: event.target.checked },()=>{
//         //filterrecords()
//     });
//     console.log("checked")
//   };

  const { human, mytholog, species } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Species</FormLabel>
        <FormGroup>
          <FormControlLabel
            className="checkbox_style"
            control={<Checkbox onChange={(data) => handleChange(data) } />}
            label="Human"
          />
          <FormControlLabel
          className="checkbox_style"
            control={<Checkbox />}
            label="Mytholog"
          />
          <FormControlLabel
          className="checkbox_style"
            control={
              <Checkbox />
            }
            label="Other Species"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup>
          <FormControlLabel
          className="checkbox_style"
            control={<Checkbox  />}
            label="Male"
          />
          <FormControlLabel
          className="checkbox_style"
            control={<Checkbox />}
            label="Female"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Origin</FormLabel>
        <FormGroup>
          <FormControlLabel
          className="checkbox_style"
            control={<Checkbox />}
            label="Unknown"
          />
          <FormControlLabel
          className="checkbox_style"
            control={<Checkbox />}
            label="Post-Apocalyptic Earth"
          />
          <FormControlLabel
          className="checkbox_style"
            control={
              <Checkbox />
            }
            label="Nuptia 4"
          />
          <FormControlLabel
          className="checkbox_style"
            control={
              <Checkbox />
            }
            label="Other Origins"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
