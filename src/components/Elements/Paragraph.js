// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1.75rem;
  color: #fff;
`;

export type ParagraphType = {
  children: Node
};

export default function Paragraph({ children }: ParagraphType): Node {
  return <StyledParagraph>{children}</StyledParagraph>;
}
