import React from 'react';
import styled, { keyframes } from 'styled-components';

import waveImage from './wave.png';

const waveAnimation = keyframes`
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
    transform: translate3d(-20%, 0, 0) rotate3d(0, 0, 1, -10deg);
  }

  30% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 7deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -2deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
`;

const StyledWave = styled.span`
  background-image: url(${waveImage});
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-top: 5px;
  cursor: pointer;
  display: inline-block;
  vertical-align: text-top;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation-name: ${waveAnimation};
  animation-fill-mode: both;
  animation-duration: 3s;
`;

const Wave = () => <StyledWave />;

export default Wave;
