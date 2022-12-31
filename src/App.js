import React from 'react';
import Navigation from './components/navigation/navigation.component';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Headline from './sections/headline/headline.section';

const App = () => {
  return(
    <Routes>
    <Route path='/' element={<Navigation />}>
    <Route index element={<Headline />}/>
      </Route>
    {/* <Headline /> */}
    {/* <h1 className="test">Hello there</h1>  */}
    </Routes>

  );
}

export default App;


