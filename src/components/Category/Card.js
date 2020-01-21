import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: 'none',
  },
  media: {
    height: 240,
  },
  avatarbanner:
  {
    position: 'relative',
  },
  banner_hero_img: 
  {
      '& img':{
        maxWidth: '100%',
        minWidth: '100%'
      }
  },
  bannertitle: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.46)',
    left: 0,
    right: 0,
    color: '#ffffff',
    letterSpacing: '0.9px',
    padding: '16px',
        '& h4': {
            margin: 0
        }
    },
    custome_list: {
        background: '#5d5c5c',
        '& li': {
            borderBottom: "1px solid #6e6e6e",
            '& .label': {
                '& span': {
                    fontSize:'10px',
                    textTransform:'uppercase',
                    color: '#bebdbd'
                }
            },
            '& .result': {
                textAlign:'right',
                '& span': {
                    fontSize:'12px',
                    color: '#e5ac0d',
                }
            }
        },
        '& li:last-child': {
            borderBottom:'none'
        }
    }
});

function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }



export default function MediaCard({character}) {
  const classes = useStyles();
  let computeOriginValue = () => {
    return character.origin.name
}

let computeLocationValue = () => {
  return character.location.name
}
  const details = [
        {
            key: 'Status',
            value: 'status'
        },
        {
            key: 'Species',
            value: 'species'
        },
        {
            key: 'Gender',
            value: 'gender'
        },
        {
            key:'Origin',
            value: computeOriginValue()
        },
        {
            key: 'Location',
            value: computeLocationValue()
        }
  ]
  console.log(details)

  

  return (
    <Card className={classes.card}>
            
        <div className={classes.avatarbanner}>
            <div className={classes.banner_hero_img}>
                <img src={character.image} alt="avatar" />
            </div>
            <div className={classes.bannertitle}>
                <h4>{character.name} </h4>
                <span>{character.created} </span>
            </div>
        </div>
        <div>
        <div className={classes.demo}>
            <List className={classes.custome_list}>
                {details.map((detail, index) =>{
                    return(
                    <ListItem>
                    <ListItemText 
                    className="label"
                    primary={detail.key}
                    />
                    <ListItemText className="result"
                      primary={character[detail.value] ? character[detail.value] : detail.value }
                    />
                  </ListItem>)
                })}
              {/* {generate(
                <ListItem>
                  <ListItemText 
                  className="label"
                  primary="Single-line item"
                  />
                  <ListItemText className="result"
                    primary="Single-line item"
                  />
                </ListItem>,
                
              )} */}
            </List>
          </div>
        </div>
    </Card>
  );
}
