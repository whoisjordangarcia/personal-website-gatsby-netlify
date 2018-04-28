import React from 'react';
import styled from 'styled-components';

import media from '../styles/media';

import profilePhoto from '../profile_photo.jpg';
import emojiImage from '../images/emoji/man-technologist.png';

import { Wave, Heading, Link, MovingBlob } from '../components';

export default function Intro() {
  return (
    <Wrapper>
      <ProfilePhoto alt="Profile" src={profilePhoto} />
      <Info>
        <Heading.h2>
          Hello! <Wave />
        </Heading.h2>
        <Heading.h2>
          {"I'm"} <span style={{ fontWeight: 'bold' }}>Jordan Garcia</span>, a senior software
          engineer at{' '}
          <Link
            fontSize="35px"
            href="https://todaytix.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            todaytix
          </Link>
          . An aussie {'"aw-see"'} (\ä-s\) currently residing in new york. <EmojiImage />
        </Heading.h2>
      </Info>

      <BlobWrapper>
        <MovingBlob />
      </BlobWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  ${media.small`
    flex-direction: column;
    padding: 40px;
  `};
`;

const ProfilePhoto = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-right: 80px;
  z-index: 1;
`;

const Info = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 750px;
  z-index: 1;
`;

const EmojiImage = styled.span`
  background-image: url(${emojiImage});
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
`;

const BlobWrapper = styled.div`
  position: absolute;
  transform: translateX(-30%);
  ${media.small`
    transform: translateX(-10%) translateY(-20%);
  `};
`;
