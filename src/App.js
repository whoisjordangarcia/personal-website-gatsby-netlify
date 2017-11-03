import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Typing, { Backspace, Cursor, Delay, Reset, Speed } from '../src';

import logo from './logo.svg';
import profilePhoto from './profile_photo.jpg';

import './App.css';

import { Wave } from './components';

const App = () => (
  <div className="App">
    <header className="personal-profile">
      <img className="profile-photo" src={profilePhoto} />
      <div className="profile-info">
        <h1>
          Hello! <Wave />
        </h1>

        <h2>
          I'm <span className="full-name">Jordan Garcia</span>, a Senior
          Software Engineer at {' '}
          <a href="https://tigerspike.com/" target="_blank">
            Tigerspike
          </a>. Currently residing in New York, New York
        </h2>
        <div className="social-container">
          <SocialIcon
            network="github"
            url="https://github.com/arickho"
            className="social-icon"
            color="#e7e7e7"
          />
          <SocialIcon
            network="email"
            url="mailto:arickho@gmail.com"
            className="social-icon"
            color="#e7e7e7"
          />
          <SocialIcon
            network="linkedin"
            url="https://linkedin.com/in/arickhogarcia"
            className="social-icon"
            color="#e7e7e7"
          />
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/whoisjordangarcia/"
            className="social-icon"
            color="#e7e7e7"
          />
        </div>
      </div>
    </header>
  </div>
);

export default App;
