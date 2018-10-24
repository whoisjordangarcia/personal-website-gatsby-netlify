import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { media } from 'styles';
import { Heading } from 'components';

const SectionHeading = styled(Heading.h2)`
  text-align: right;

  ${media.small`
    text-align: left;
  `};
`;

const Section = styled.section`
  display: grid;
  margin: 20px auto;
  max-width: 1000px;
  grid-template-columns: 35% 65%;

  ${media.small`
    grid-template-columns: auto;
    grid-template-rows: auto;
    padding: 0 40px;
  `};

  ${media.medium`
    margin: 0 20px;
  `};

  ${media.large`
    margin: 0 20px;
  `};
`;

const Content = styled.div`
  padding-left: 100px;

  ${media.small`
    padding-left: 0px;
  `};
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

Information.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string
};

Information.defaultProps = {
  children: null,
  heading: null
};
