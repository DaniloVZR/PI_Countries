import React from 'react';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import ActivityCreate from './components/ActivityCreate/ActivityCreate.jsx';
import ActivitiesList from './components/ActivitiesList/ActivitiesList.jsx';
import Detail from './components/Detail/Detail.jsx';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path = '/' component = {LandingPage}/>
          <Route exact path = '/Home' component = {Home}/>
          <Route exact path = '/Activity' component = {ActivityCreate}/>
          <Route exact path = '/Activities' component = {ActivitiesList}/>
          <Route exact path = '/Home/:id' component = {Detail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
