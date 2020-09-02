import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar brand="Game Library" />
        <Switch>
            <Route path="/" exact={true} component={Home} />
        </Switch>
    </ BrowserRouter>
  );
}

export default App;
