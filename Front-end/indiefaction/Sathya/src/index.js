import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/profile'
import EditProfile from './components/editProfile'
import {WelcomeBox, AboutUs, DashboardColumn, GuestColumn} from './components/dashboard_components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(

  <React.StrictMode>
  
  <WelcomeBox guest={false}></WelcomeBox>
  <Router>
    <Switch>
      <Route path='/' exact>
	      <GuestColumn></GuestColumn>
        <Profile></Profile>
        {/* <EditProfile></EditProfile> */}
      </Route>
      <Route path='/edit'>
	      <DashboardColumn></DashboardColumn>
        <EditProfile></EditProfile>
      </Route>
    </Switch>
  </Router>
  <AboutUs></AboutUs>
    {/* <App /> */}
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
