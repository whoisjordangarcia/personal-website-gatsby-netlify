import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 35px;
  font-weight: ${props => (props.bold ? 700 : 300)};
  line-height: 45px;
  color: #4c4c4c;
`;

Heading.h1 = Heading;

Heading.h2 = styled(Heading.withComponent('h2'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h3 = styled(Heading.withComponent('h3'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h4 = styled(Heading.withComponent('h4'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h5 = styled(Heading.withComponent('h5'))`
  font-size: ${props => props.fontSize || '35px'};
`;

Heading.h6 = styled(Heading.withComponent('h6'))`
  font-size: ${props => props.fontSize || '35px'};
`;

export default Heading;
