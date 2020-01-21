import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ThemeSetting from '../ThemeSetting';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 500,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    setState({ ...state, [side]: open });
  };

//   const sideList = side => (
//     <div
//         className={classes.list}
//         role="presentation"
//         onClick={toggleDrawer(side, false)}
//         onKeyDown={toggleDrawer(side, false)}
//     >
//         hello
//     </div>
//   )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant={props.theme.dense ? 'dense' : 'regular'}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={toggleDrawer('right', true)}>theme customization</Button>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {/* {sideList('right')} */}
                <div className={classes.list}>
                    <ThemeSetting theme={props.theme} setTheme={props.setTheme}/>
                </div>
            </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
