import React from 'react';
import styled from 'styled-components';

import { Wave, Heading, Link, MovingBlob } from 'components';
import { device } from 'components/_styles';

export default function Intro() {
  return (
    <Wrapper>
      <ProfilePhoto alt="Profile" src="/static/profile_photo.jpeg" />
      <Info>
        <Heading.h2>
          Hello! <Wave />
        </Heading.h2>
        <Heading.h2>
          {"I'm"} <span style={{ fontWeight: 'bold' }}>Jordan Garcia</span>, a
          senior software engineer at{' '}
          <Link
            fontSize="35px"
            href="https://www.invitae.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            invitae
          </Link>
          . An aussie {'"aw-see"'} (\ä-s\) currently residing in new york.{' '}
          <EmojiImage />
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

  @media ${device.small} {
    flex-direction: column;
    padding: 20px 40px;
  }
`;

const ProfilePhoto = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-right: 80px;
  z-index: 1;

  @media ${device.small} {
    margin-right: 0;
  }
`;

const Info = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: 750px;
  z-index: 1;
`;

const EmojiImage = styled.span`
  background-image: url('static/man-technologist.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
`;

const BlobWrapper = styled.div`
  position: absolute;
  transform: translateX(-30%);

  @media ${device.small} {
    transform: translateX(0%) translateY(-20%);
    overflow: hidden;
  }
`;
