import React from 'react';
import Navigation from './components/navigation/navigation.component';
import NavigationBlack from './components/navigation-black/navigation.black.component';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Demo from './sections/demo/demo.section.jsx';

import Headline from './sections/headline/headline.section';

const App = () => {
  return(
    <Routes>
    <Route path='/' element={<Navigation />}>
    <Route index element={<Headline />}/>
    </Route>
    <Route path='/demo' element={<NavigationBlack />}>
    <Route index element={<Demo />}/>
    </Route>
    </Routes>

  );
}

export default App;


