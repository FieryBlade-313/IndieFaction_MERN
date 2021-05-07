import React from 'react';
import ReactDOM from 'react-dom';
import { WelcomeBox, AboutUs, DashboardColumn, GuestColumn } from './dashboard_components'
import { Name, Price, Genre } from '../Samandeep/src/dashboard_components'
import ConsoleController from './controller'
import BackgroundBox from './homepage_components'
import LogInBackBox from './login_components'
import FlexBox from './flexbox'
import App from './App';
import Profile from '../Sathya/src/components/profile'
import EditProfile from '../Sathya/src/components/editProfile'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* Uncomment the below part to see the Dashboard */}
    {/* <DashboardColumn />
    <WelcomeBox guest={false} />
    <AboutUs />
    <FlexBox /> */}

    {/* Uncomment the below part to see the Guest Explore Page */}
    {/* <GuestColumn />
    <WelcomeBox guest={true} />
    <AboutUs />
    <FlexBox /> */}

    {/* Uncomment the below part to see the Homepage */}
    {/* <BackgroundBox />
    <ConsoleController height={84} width={150} /> */}

    {/* Uncomment the below part to see the Login Page */}
    {/* <LogInBackBox />
    <ConsoleController height={84} width={150} /> */}

    {/* Uncomment the below part to see the Profile Page */}
    {/* <WelcomeBox guest={false}></WelcomeBox>
    <GuestColumn></GuestColumn>
    <Profile></Profile>
    <AboutUs></AboutUs> */}

    {/* Uncomment the below part to see the Edit Profile Page */}
    {/* <WelcomeBox guest={false}></WelcomeBox>
    <EditProfile></EditProfile>
    <Profile></Profile>
    <AboutUs></AboutUs> */}

    {/* Uncomment the below part to see the Create Collector Edition Page */}
    {/* <DashboardColumn />
    <WelcomeBox guest={false} />
    <Name/>
    <Price/>
    <Genre/>
    <AboutUs />
    <ImgPrev /> */}

    


    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
