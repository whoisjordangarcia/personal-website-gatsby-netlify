// @flow
import type { Node } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
  color: #4c4c4c;
`;

export type ParagraphType = {
  children: Node
};

export default StyledParagraph;
