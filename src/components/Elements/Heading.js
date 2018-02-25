import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  color: #fff;
`;

Heading.h1 = Heading;
Heading.h2 = Heading.withComponent('h2');
Heading.h3 = Heading.withComponent('h3');
Heading.h4 = Heading.withComponent('h4');
Heading.h5 = Heading.withComponent('h5');
Heading.h6 = Heading.withComponent('h6');

export default Heading;
