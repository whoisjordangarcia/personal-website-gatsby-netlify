// @flow

import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { SocialIcon as Icon } from 'react-social-icons';

type SocialIconType = {
  network: string,
  url: string
};

const StyledSocialIcon = styled(Icon)`
  margin: 5px;
  width: 30px !important;
  height: 30px !important;

  &:first-child {
    margin-left: 0;
  }
`;

export default function SocialIcon({ network, url }: SocialIconType): Node {
  return <StyledSocialIcon network={network} url={url} color="#e7e7e7" />;
}
