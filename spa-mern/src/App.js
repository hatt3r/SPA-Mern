import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import './App.css';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
const App = () =>{
  return (
   <Router>
    <Switch>
    <Route path="/" exact = {true}>
      <Users/>
    </Route>
    <Route path="/places/new" exact = {true}>
      <NewPlaces/>
    </Route>
    <Redirect to="/"/>
    </Switch>
   </Router>
  );
}

export default App;
