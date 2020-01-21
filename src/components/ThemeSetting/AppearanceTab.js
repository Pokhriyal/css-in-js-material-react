import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import setCookie from '../../utils/setcookie'
import {colors,defTheme} from '../../themes/ThemeConfig'
import { 
    Box,
    FormControl, 
    InputLabel,
    Select,
    MenuItem,
    Divider,
    Checkbox,
    Button
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
const handleChange = (theme,setTheme,key,value) => {
   let themeObj = {...theme};
    themeObj.palette[key].main=value
    setCookieAndChange(themeObj,setTheme)
}

const handleTypeChange = (theme, setTheme, value) => {
    let themeObj = {...theme};
    themeObj.palette.type=value
    setCookieAndChange(themeObj,setTheme)
}
const handleDenseChange = (theme, setTheme, value) => {
    let themeObj = {...theme};
    themeObj.dense=value
    setCookieAndChange(themeObj,setTheme)
    
}
const resetTheme = (setTheme) =>{
   setCookieAndChange(defTheme,setTheme)
   setTheme(JSON.parse(JSON.stringify(defTheme))) 
}

const setCookieAndChange=(themeObj,setTheme)=>{
    setCookie("theme",JSON.stringify(themeObj),2)
    setTheme(themeObj) 
}
export default function SwitchListSecondary(props) {
  const classes = useStyles();
  return (
     
    <List dense={props.theme.dense} subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
       

      {/* <Box>
      <ListItem>
        <ListItemIcon>
            <FiberManualRecord color="primary" />
        </ListItemIcon>

        <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>

      </ListItem>
      </Box> */}

        <Box>
            <ListItem>
                <ListItemIcon>
                    <FiberManualRecord color="primary" />
                </ListItemIcon>

                <FormControl fullWidth>
                    <InputLabel>Primary color</InputLabel>
                    <Select
                     value={props.theme.palette.primary.main}
                     onChange={(event)=>handleChange(props.theme,props.setTheme,"primary",event.target.value)}
                    >
                        {
                            colors.map(color=>{
                                return <MenuItem value={color.color}>{color.name}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </ListItem>
        </Box>
        <Box>
            <ListItem>
                <ListItemIcon>
                    <FiberManualRecord color="secondary" />
                </ListItemIcon>

                <FormControl fullWidth>
                    <InputLabel>Secondary color</InputLabel>
                    <Select
                    value={props.theme.palette.secondary.main}
                    onChange={(event)=>handleChange(props.theme,props.setTheme,"secondary",event.target.value)}
                   
                    >
                        {
                            colors.map(color=>{
                                return <MenuItem value={color.color}>{color.name}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </ListItem>
        </Box>

        <Box>
            <ListItem>
                <ListItemIcon>
                    <InvertColorsIcon />
                </ListItemIcon>

                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                    value={props.theme.palette.type}
                    onChange={(event)=>handleTypeChange(props.theme,props.setTheme,event.target.value)}
                    >
                        <MenuItem value="light">Light</MenuItem>
                        <MenuItem value="dark">Dark</MenuItem>
                    </Select>
                </FormControl>
            </ListItem>
        </Box>

        <Box mt={2} mb={1}>
            <Divider light />
        </Box>

        <Box>
            <ListItem>
                <ListItemIcon>
                    <FormatSizeIcon />
                </ListItemIcon>

                <ListItemText
                primary="Dense mode"
                secondary="Compact vertical padding"
                />

                <Checkbox checked={props.theme.dense}

                onChange={(event)=>handleDenseChange(props.theme,props.setTheme,event.target.checked)}
                />
            </ListItem>
        </Box>

        <Box>
            <ListItem>
                <ListItemIcon>
                    <FormatColorResetIcon />
                </ListItemIcon>

                <ListItemText
                primary="Reset theme"
                // secondary={theming.isDefaultTheme(theme) ? 'No changes made' : 'Changes will be reset'}
                />

                <ListItemSecondaryAction>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={()=>resetTheme(props.setTheme)}
                >
                    Reset
                </Button>
                </ListItemSecondaryAction>
            </ListItem>
        </Box>

    </List>
  );
}
