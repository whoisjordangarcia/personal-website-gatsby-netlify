import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 35px;
  font-weight: ${props => (props.bold ? 700 : 300)};
  line-height: 45px;
  color: #4c4c4c;
`;

Heading.h1 = Heading;
Heading.h2 = Heading.extend`
  font-size: ${props => props.fontSize || '35px'};
`.withComponent('h2');
Heading.h3 = Heading.extend`
  font-size: ${props => props.fontSize || '35px'};
`.withComponent('h3');
Heading.h4 = Heading.extend`
  font-size: ${props => props.fontSize || '35px'};
`.withComponent('h4');
Heading.h5 = Heading.extend`
  font-size: ${props => props.fontSize || '35px'};
`.withComponent('h5');
Heading.h6 = Heading.extend`
  font-size: ${props => props.fontSize || '35px'};
`.withComponent('h6');

export default Heading;
