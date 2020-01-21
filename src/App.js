import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import getCookie from './utils/getcookie';
import {defTheme} from './themes/ThemeConfig'
const getTheme =(theme)=>{
  if(!theme)
    return null
  else{
      return createMuiTheme(theme)
  }
}






function App() {
  let themeFromCookie=getCookie("theme")
  let defaultTheme={}
  if(themeFromCookie && themeFromCookie!==""){
    defaultTheme = JSON.parse(themeFromCookie)
  }
  else{
    defaultTheme={...defTheme}
  }
  const [theme, setTheme] = useState(defaultTheme);

  const [characters, setCharacters] = useState({});


  // const computeLocationValue = (key, value) => {
  //   return character.key
  // }


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(function (response) {
      // handle success
      setCharacters(response.data)
      console.log(response.data)
      //setFilterrecords(_.filter(response.data.results, { species: 'Human' }))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  },[])


  let handleStatusChange = (key, value) =>  {
    let filteredData = {...characters} 
    if(filteredData.hasOwnProperty('results')){
      if(value.length){
        filteredData = characters.results.filter((character) => {
          return character[key] == value
        })
      }
      else{
        filteredData = characters.results
      }
     
    }
    let charactersData = {
      ...characters,
      results: filteredData
    }
    setCharacters(charactersData)
  }



  let themeFormat = getTheme(theme)

  return (
    <ThemeProvider theme={themeFormat}>
      <React.Fragment>
        <Header theme={theme} setTheme={setTheme}/>
        <CssBaseline />
        {/* <ul>
                
                { characters.hasOwnProperty('results') ?
                characters.results.map(character => (
                    <li key={character.id}> {character.name} </li>
                )): null}
          </ul> */}
        <Container fixed>
        <Category characters={characters} handleStatusChange={handleStatusChange} />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
