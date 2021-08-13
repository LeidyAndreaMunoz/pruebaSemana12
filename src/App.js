import './App.css';
import React, {useEffect} from 'react';
import {getMovieList} from './fetchapi';
import { Counter } from './Counter';

 function App() {

  useEffect(async () => {
    const info = await getMovieList(2019)
    console.log(`info`, info)
  } , [])


  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
