// @flow

import styled from 'styled-components';

export default styled.a`
  transition: all 0.2s ease;
  text-decoration: none;
  position: relative;
  color: white;
  font-weight: ${(p: { bold: boolean }): string => (p.bold ? 'bold' : 'normal')};

  &:hover {
    :after {
      width: 25%;
    }
  }

  &:visited {
    text-decoration: none;
    color: #fff;
  }

  &:after {
    content: '';
    border-bottom: 4px solid #fff;
    height: 4px;
    width: 0%;
    position: absolute;
    bottom: -5px;
    padding-top: 5px;
    right: 0;
    transition: all 0.2s ease;
  }
`;
