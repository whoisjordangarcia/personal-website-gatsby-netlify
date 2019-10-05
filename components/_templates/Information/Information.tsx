import React from 'react';
import styled from 'styled-components';

import { device } from 'components/_styles';
import { Heading } from 'components';

const SectionHeading = styled(Heading.h2)`
  text-align: right;

  @media ${device.small} {
    text-align: left;
  }
`;

const Section = styled.section`
  display: grid;
  margin: 20px auto;
  max-width: 1000px;
  grid-template-columns: 35% 65%;

  @media ${device.small} {
    grid-template-columns: auto;
    grid-template-rows: auto;
    padding: 0 10px;
  }
  @media ${device.medium} {
    margin: 0 30px;
  }
  @media ${device.large} {
    margin: 0 20px;
  }
`;

const Content = styled.div`
  padding-left: 100px;

  @media ${device.small} {
    padding-left: 0px;
  }
`;

export default function Information({ heading, children }) {
  return (
    <Section>
      <SectionHeading bold fontSize="18px">
        {heading}
      </SectionHeading>
      <Content>{children}</Content>
    </Section>
  );
}
