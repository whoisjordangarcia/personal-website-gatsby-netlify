import React from 'react';
import styled from 'styled-components';

import { Wave, SocialIcon, Heading, Link } from './components';

import media from './styles/media';

import profilePhoto from './profile_photo.jpg';

const socialIcons = [
  { network: 'github', url: 'https://github.com/arickho' },
  { network: 'email', url: 'mailto:arickho@gmail.com' },
  { network: 'linkedin', url: 'https://linkedin.com/in/arickhogarcia' },
  { network: 'instagram', url: 'https://www.instagram.com/whoisjordangarcia/' },
];

const App = () => (
  <Wrapper>
    <ProfilePhoto alt="Profile" src={profilePhoto} />
    <Info>
      <Heading.h1>
        Hello! <Wave />
      </Heading.h1>

      <Heading.h2>
        {"I'm"} <span className="full-name">Jordan Garcia</span>, a Senior Software Engineer at{' '}
        <Link bold href="https://todaytix.com/" target="_blank" rel="noopener noreferrer">
          @todaytix
        </Link>. Currently residing in New York, New York
      </Heading.h2>
      <div>
        {socialIcons.map(socialIcon => <SocialIcon key={socialIcon.network} {...socialIcon} />)}
      </div>
    </Info>
  </Wrapper>
);

const Wrapper = styled.header`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  background-color: #ee5050;
  display: flex;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  ${media.small`
    flex-direction: column;
    padding: 20px;
  `};
`;

const ProfilePhoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-right: 25px;
`;

const Info = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 650px;
  line-height: 40px;
`;

export default App;
